package operations

import (
	"openapi/pkg/models/shared"
)

type UsersListQueryParams struct {
	PerPage *int64 `queryParam:"style=form,explode=true,name=per_page"`
	Since   *int64 `queryParam:"style=form,explode=true,name=since"`
}

type UsersListRequest struct {
	QueryParams UsersListQueryParams
}

type UsersListResponse struct {
	ContentType string
	Headers     map[string][]string
	StatusCode  int64
	SimpleUsers []shared.SimpleUser
}
