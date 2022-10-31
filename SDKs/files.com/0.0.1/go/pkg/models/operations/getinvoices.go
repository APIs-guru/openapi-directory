package operations

import (
	"openapi/pkg/models/shared"
)

type GetInvoicesQueryParams struct {
	Cursor  *string `queryParam:"style=form,explode=true,name=cursor"`
	PerPage *int32  `queryParam:"style=form,explode=true,name=per_page"`
}

type GetInvoicesRequest struct {
	QueryParams GetInvoicesQueryParams
}

type GetInvoicesResponse struct {
	AccountLineItemEntities []shared.AccountLineItemEntity
	ContentType             string
	StatusCode              int64
}
