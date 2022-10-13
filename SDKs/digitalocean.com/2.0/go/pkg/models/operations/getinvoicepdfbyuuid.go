package operations

import (
	"openapi/pkg/models/shared"
)

type GetInvoicePdfByUUIDPathParams struct {
	InvoiceUUID string `pathParam:"style=simple,explode=false,name=invoice_uuid"`
}

type GetInvoicePdfByUUIDRequest struct {
	PathParams GetInvoicePdfByUUIDPathParams
}

type GetInvoicePdfByUUID401ApplicationJSON struct {
	ID        string  `json:"id"`
	Message   string  `json:"message"`
	RequestID *string `json:"request_id"`
}

type GetInvoicePdfByUUIDResponse struct {
	ContentType                                               string
	Headers                                                   map[string][]string
	StatusCode                                                int64
	GetInvoicePdfByUUID200ApplicationPdfBinaryString          []byte
	GetInvoicePdfByUUID401ApplicationJSONObject               *GetInvoicePdfByUUID401ApplicationJSON
	Onev211ClicksGetResponses401ContentApplication1jsonSchema *shared.Onev211ClicksGetResponses401ContentApplication1jsonSchema
}
