package operations

import (
	"openapi/pkg/models/shared"
)

type SalesInvoicesPutPathParams struct {
	ID int64 `pathParam:"style=simple,explode=false,name=id"`
}

type SalesInvoicesPutRequest struct {
	PathParams SalesInvoicesPutPathParams
	Request    shared.SalesInvoiceCreditNoteDto `request:"mediaType=application/json"`
}

type SalesInvoicesPutResponse struct {
	ContentType                              string
	SalesInvoicesPut200ApplicationJSONObject map[string]interface{}
	StatusCode                               int64
}
