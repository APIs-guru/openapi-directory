package operations

import (
	"openapi/pkg/models/shared"
)

type UsersListFollowersForUserPathParams struct {
	Username string `pathParam:"style=simple,explode=false,name=username"`
}

type UsersListFollowersForUserQueryParams struct {
	Page    *int64 `queryParam:"style=form,explode=true,name=page"`
	PerPage *int64 `queryParam:"style=form,explode=true,name=per_page"`
}

type UsersListFollowersForUserRequest struct {
	PathParams  UsersListFollowersForUserPathParams
	QueryParams UsersListFollowersForUserQueryParams
}

type UsersListFollowersForUserResponse struct {
	ContentType string
	Headers     map[string][]string
	StatusCode  int64
	SimpleUsers []shared.SimpleUser
}
