package operations

import (
	"openapi/pkg/models/shared"
)

type SalesInvoicesPostCreateSaleInvoiceWithGeneratingReferenceRequest struct {
	Request shared.SalesInvoiceCreditNoteDto `request:"mediaType=application/json"`
}

type SalesInvoicesPostCreateSaleInvoiceWithGeneratingReferenceResponse struct {
	ContentType                                                                       string
	SalesInvoicesPostCreateSaleInvoiceWithGeneratingReference200ApplicationJSONObject map[string]interface{}
	StatusCode                                                                        int64
}
