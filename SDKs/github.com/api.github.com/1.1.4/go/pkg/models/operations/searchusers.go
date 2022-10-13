package operations

import (
	"openapi/pkg/models/shared"
)

type SearchUsersSortEnum string

const (
	SearchUsersSortEnumFollowers    SearchUsersSortEnum = "followers"
	SearchUsersSortEnumRepositories SearchUsersSortEnum = "repositories"
	SearchUsersSortEnumJoined       SearchUsersSortEnum = "joined"
)

type SearchUsersQueryParams struct {
	Order   *shared.OrderEnum    `queryParam:"style=form,explode=true,name=order"`
	Page    *int64               `queryParam:"style=form,explode=true,name=page"`
	PerPage *int64               `queryParam:"style=form,explode=true,name=per_page"`
	Q       string               `queryParam:"style=form,explode=true,name=q"`
	Sort    *SearchUsersSortEnum `queryParam:"style=form,explode=true,name=sort"`
}

type SearchUsersRequest struct {
	QueryParams SearchUsersQueryParams
}

type SearchUsers200ApplicationJSON struct {
	IncompleteResults bool                          `json:"incomplete_results"`
	Items             []shared.UserSearchResultItem `json:"items"`
	TotalCount        int64                         `json:"total_count"`
}

type SearchUsers503ApplicationJSON struct {
	Code             *string `json:"code"`
	DocumentationURL *string `json:"documentation_url"`
	Message          *string `json:"message"`
}

type SearchUsersResponse struct {
	ContentType                         string
	StatusCode                          int64
	SearchUsers200ApplicationJSONObject *SearchUsers200ApplicationJSON
	SearchUsers503ApplicationJSONObject *SearchUsers503ApplicationJSON
	ValidationError                     *shared.ValidationError
}
