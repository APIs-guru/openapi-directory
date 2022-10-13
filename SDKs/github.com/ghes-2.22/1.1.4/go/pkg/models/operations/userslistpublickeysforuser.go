package operations

import (
	"openapi/pkg/models/shared"
)

type UsersListPublicKeysForUserPathParams struct {
	Username string `pathParam:"style=simple,explode=false,name=username"`
}

type UsersListPublicKeysForUserQueryParams struct {
	Page    *int64 `queryParam:"style=form,explode=true,name=page"`
	PerPage *int64 `queryParam:"style=form,explode=true,name=per_page"`
}

type UsersListPublicKeysForUserRequest struct {
	PathParams  UsersListPublicKeysForUserPathParams
	QueryParams UsersListPublicKeysForUserQueryParams
}

type UsersListPublicKeysForUserResponse struct {
	ContentType string
	Headers     map[string][]string
	StatusCode  int64
	KeySimples  []shared.KeySimple
}
