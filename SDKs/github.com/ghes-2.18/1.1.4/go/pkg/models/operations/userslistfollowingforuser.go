package operations

import (
	"openapi/pkg/models/shared"
)

type UsersListFollowingForUserPathParams struct {
	Username string `pathParam:"style=simple,explode=false,name=username"`
}

type UsersListFollowingForUserQueryParams struct {
	Page    *int64 `queryParam:"style=form,explode=true,name=page"`
	PerPage *int64 `queryParam:"style=form,explode=true,name=per_page"`
}

type UsersListFollowingForUserRequest struct {
	PathParams  UsersListFollowingForUserPathParams
	QueryParams UsersListFollowingForUserQueryParams
}

type UsersListFollowingForUserResponse struct {
	ContentType string
	Headers     map[string][]string
	StatusCode  int64
	SimpleUsers []shared.SimpleUser
}
