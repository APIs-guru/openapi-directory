package operations

import (
	"openapi/pkg/models/shared"
)

type GetV1SalesInvoicesIDPathParams struct {
	ID int64 `pathParam:"style=simple,explode=false,name=id"`
}

type GetV1SalesInvoicesIDRequest struct {
	PathParams GetV1SalesInvoicesIDPathParams
}

type GetV1SalesInvoicesIDResponse struct {
	ContentType               string
	SalesInvoiceCreditNoteDto *shared.SalesInvoiceCreditNoteDto
	StatusCode                int64
}
