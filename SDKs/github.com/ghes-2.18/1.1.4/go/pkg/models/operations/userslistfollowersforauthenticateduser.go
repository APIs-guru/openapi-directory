package operations

import (
	"openapi/pkg/models/shared"
)

type UsersListFollowersForAuthenticatedUserQueryParams struct {
	Page    *int64 `queryParam:"style=form,explode=true,name=page"`
	PerPage *int64 `queryParam:"style=form,explode=true,name=per_page"`
}

type UsersListFollowersForAuthenticatedUserRequest struct {
	QueryParams UsersListFollowersForAuthenticatedUserQueryParams
}

type UsersListFollowersForAuthenticatedUserResponse struct {
	ContentType string
	Headers     map[string][]string
	StatusCode  int64
	BasicError  *shared.BasicError
	SimpleUsers []shared.SimpleUser
}
