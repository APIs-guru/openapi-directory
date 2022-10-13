package operations

import (
	"openapi/pkg/models/shared"
)

type ListInvoices200ApplicationJSONInvoices struct {
	Amount        *string `json:"amount"`
	InvoicePeriod *string `json:"invoice_period"`
	InvoiceUUID   *string `json:"invoice_uuid"`
	UpdatedAt     *string `json:"updated_at"`
}

type ListInvoices200ApplicationJSONLinksPages1 struct {
	Last *string `json:"last"`
	Next *string `json:"next"`
}

type ListInvoices200ApplicationJSONLinksPages2 struct {
	First *string `json:"first"`
	Prev  *string `json:"prev"`
}

type ListInvoices200ApplicationJSONLinks struct {
	Pages *interface{} `json:"pages"`
}

type ListInvoices200ApplicationJSONMeta struct {
	Total int64 `json:"total"`
}

type ListInvoices200ApplicationJSON struct {
	InvoicePreview *shared.Onev21customers1my1invoicesGetResponses200ContentApplication1jsonSchemaAllOf0PropertiesInvoicesItems `json:"invoice_preview"`
	Invoices       []ListInvoices200ApplicationJSONInvoices                                                                     `json:"invoices"`
	Links          *ListInvoices200ApplicationJSONLinks                                                                         `json:"links"`
	Meta           ListInvoices200ApplicationJSONMeta                                                                           `json:"meta"`
}

type ListInvoices401ApplicationJSON struct {
	ID        string  `json:"id"`
	Message   string  `json:"message"`
	RequestID *string `json:"request_id"`
}

type ListInvoicesResponse struct {
	ContentType                                               string
	Headers                                                   map[string][]string
	StatusCode                                                int64
	ListInvoices200ApplicationJSONObject                      *ListInvoices200ApplicationJSON
	ListInvoices401ApplicationJSONObject                      *ListInvoices401ApplicationJSON
	Onev211ClicksGetResponses401ContentApplication1jsonSchema *shared.Onev211ClicksGetResponses401ContentApplication1jsonSchema
}
