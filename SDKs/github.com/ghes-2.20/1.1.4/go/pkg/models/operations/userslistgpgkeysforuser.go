package operations

import (
	"openapi/pkg/models/shared"
)

type UsersListGpgKeysForUserPathParams struct {
	Username string `pathParam:"style=simple,explode=false,name=username"`
}

type UsersListGpgKeysForUserQueryParams struct {
	Page    *int64 `queryParam:"style=form,explode=true,name=page"`
	PerPage *int64 `queryParam:"style=form,explode=true,name=per_page"`
}

type UsersListGpgKeysForUserRequest struct {
	PathParams  UsersListGpgKeysForUserPathParams
	QueryParams UsersListGpgKeysForUserQueryParams
}

type UsersListGpgKeysForUserResponse struct {
	ContentType string
	Headers     map[string][]string
	StatusCode  int64
	GpgKeys     []shared.GpgKey
}
