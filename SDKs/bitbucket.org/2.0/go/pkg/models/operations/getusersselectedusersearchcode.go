package operations

import (
	"openapi/pkg/models/shared"
)

type GetUsersSelectedUserSearchCodePathParams struct {
	SelectedUser string `pathParam:"style=simple,explode=false,name=selected_user"`
}

type GetUsersSelectedUserSearchCodeQueryParams struct {
	Page        *int32 `queryParam:"style=form,explode=true,name=page"`
	Pagelen     *int32 `queryParam:"style=form,explode=true,name=pagelen"`
	SearchQuery string `queryParam:"style=form,explode=true,name=search_query"`
}

type GetUsersSelectedUserSearchCodeRequest struct {
	PathParams  GetUsersSelectedUserSearchCodePathParams
	QueryParams GetUsersSelectedUserSearchCodeQueryParams
}

type GetUsersSelectedUserSearchCodeResponse struct {
	ContentType      string
	StatusCode       int64
	Error            map[string]interface{}
	SearchResultPage *shared.SearchResultPage
}
