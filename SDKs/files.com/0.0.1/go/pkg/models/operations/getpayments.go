package operations

import (
	"openapi/pkg/models/shared"
)

type GetPaymentsQueryParams struct {
	Cursor  *string `queryParam:"style=form,explode=true,name=cursor"`
	PerPage *int32  `queryParam:"style=form,explode=true,name=per_page"`
}

type GetPaymentsRequest struct {
	QueryParams GetPaymentsQueryParams
}

type GetPaymentsResponse struct {
	AccountLineItemEntities []shared.AccountLineItemEntity
	ContentType             string
	StatusCode              int64
}
