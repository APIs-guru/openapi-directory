package operations

import (
	"openapi/pkg/models/shared"
)

type GetInvoiceCsvByUUIDPathParams struct {
	InvoiceUUID string `pathParam:"style=simple,explode=false,name=invoice_uuid"`
}

type GetInvoiceCsvByUUIDRequest struct {
	PathParams GetInvoiceCsvByUUIDPathParams
}

type GetInvoiceCsvByUUID401ApplicationJSON struct {
	ID        string  `json:"id"`
	Message   string  `json:"message"`
	RequestID *string `json:"request_id,omitempty"`
}

type GetInvoiceCsvByUUIDResponse struct {
	ContentType                                               string
	Headers                                                   map[string][]string
	StatusCode                                                int64
	GetInvoiceCsvByUUID200TextCsvString                       *string
	GetInvoiceCsvByUUID401ApplicationJSONObject               *GetInvoiceCsvByUUID401ApplicationJSON
	Onev211ClicksGetResponses401ContentApplication1jsonSchema *shared.Onev211ClicksGetResponses401ContentApplication1jsonSchema
}
