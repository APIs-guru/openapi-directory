package operations

import (
	"openapi/pkg/models/shared"
)

type GetUserRequestsQueryParams struct {
	Cursor  *string `queryParam:"style=form,explode=true,name=cursor"`
	PerPage *int32  `queryParam:"style=form,explode=true,name=per_page"`
}

type GetUserRequestsRequest struct {
	QueryParams GetUserRequestsQueryParams
}

type GetUserRequestsResponse struct {
	ContentType         string
	StatusCode          int64
	UserRequestEntities []shared.UserRequestEntity
}
