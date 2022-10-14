package operations

import (
	"openapi/pkg/models/shared"
)

type ListInvoices200ApplicationJSONInvoices struct {
	Amount        *string `json:"amount,omitempty"`
	InvoicePeriod *string `json:"invoice_period,omitempty"`
	InvoiceUUID   *string `json:"invoice_uuid,omitempty"`
	UpdatedAt     *string `json:"updated_at,omitempty"`
}

type ListInvoices200ApplicationJSONLinksPages1 struct {
	Last *string `json:"last,omitempty"`
	Next *string `json:"next,omitempty"`
}

type ListInvoices200ApplicationJSONLinksPages2 struct {
	First *string `json:"first,omitempty"`
	Prev  *string `json:"prev,omitempty"`
}

type ListInvoices200ApplicationJSONLinks struct {
	Pages *interface{} `json:"pages,omitempty"`
}

type ListInvoices200ApplicationJSONMeta struct {
	Total int64 `json:"total"`
}

type ListInvoices200ApplicationJSON struct {
	InvoicePreview *shared.Onev21customers1my1invoicesGetResponses200ContentApplication1jsonSchemaAllOf0PropertiesInvoicesItems `json:"invoice_preview,omitempty"`
	Invoices       []ListInvoices200ApplicationJSONInvoices                                                                     `json:"invoices,omitempty"`
	Links          *ListInvoices200ApplicationJSONLinks                                                                         `json:"links,omitempty"`
	Meta           ListInvoices200ApplicationJSONMeta                                                                           `json:"meta"`
}

type ListInvoices401ApplicationJSON struct {
	ID        string  `json:"id"`
	Message   string  `json:"message"`
	RequestID *string `json:"request_id,omitempty"`
}

type ListInvoicesResponse struct {
	ContentType                                               string
	Headers                                                   map[string][]string
	StatusCode                                                int64
	ListInvoices200ApplicationJSONObject                      *ListInvoices200ApplicationJSON
	ListInvoices401ApplicationJSONObject                      *ListInvoices401ApplicationJSON
	Onev211ClicksGetResponses401ContentApplication1jsonSchema *shared.Onev211ClicksGetResponses401ContentApplication1jsonSchema
}
