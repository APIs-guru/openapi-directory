package operations

import (
	"openapi/pkg/models/shared"
)

type GetInvoiceByUUIDPathParams struct {
	InvoiceUUID string `pathParam:"style=simple,explode=false,name=invoice_uuid"`
}

type GetInvoiceByUUIDRequest struct {
	PathParams GetInvoiceByUUIDPathParams
}

type GetInvoiceByUUID200ApplicationJSONInvoiceItems struct {
	Amount           *string `json:"amount,omitempty"`
	Description      *string `json:"description,omitempty"`
	Duration         *string `json:"duration,omitempty"`
	DurationUnit     *string `json:"duration_unit,omitempty"`
	EndTime          *string `json:"end_time,omitempty"`
	GroupDescription *string `json:"group_description,omitempty"`
	Product          *string `json:"product,omitempty"`
	ProjectName      *string `json:"project_name,omitempty"`
	ResourceID       *string `json:"resource_id,omitempty"`
	ResourceUUID     *string `json:"resource_uuid,omitempty"`
	StartTime        *string `json:"start_time,omitempty"`
}

type GetInvoiceByUUID200ApplicationJSONLinksPages1 struct {
	Last *string `json:"last,omitempty"`
	Next *string `json:"next,omitempty"`
}

type GetInvoiceByUUID200ApplicationJSONLinksPages2 struct {
	First *string `json:"first,omitempty"`
	Prev  *string `json:"prev,omitempty"`
}

type GetInvoiceByUUID200ApplicationJSONLinks struct {
	Pages *interface{} `json:"pages,omitempty"`
}

type GetInvoiceByUUID200ApplicationJSONMeta struct {
	Total int64 `json:"total"`
}

type GetInvoiceByUUID200ApplicationJSON struct {
	InvoiceItems []GetInvoiceByUUID200ApplicationJSONInvoiceItems `json:"invoice_items,omitempty"`
	Links        *GetInvoiceByUUID200ApplicationJSONLinks         `json:"links,omitempty"`
	Meta         GetInvoiceByUUID200ApplicationJSONMeta           `json:"meta"`
}

type GetInvoiceByUUID401ApplicationJSON struct {
	ID        string  `json:"id"`
	Message   string  `json:"message"`
	RequestID *string `json:"request_id,omitempty"`
}

type GetInvoiceByUUIDResponse struct {
	ContentType                                               string
	Headers                                                   map[string][]string
	StatusCode                                                int64
	GetInvoiceByUUID200ApplicationJSONObject                  *GetInvoiceByUUID200ApplicationJSON
	GetInvoiceByUUID401ApplicationJSONObject                  *GetInvoiceByUUID401ApplicationJSON
	Onev211ClicksGetResponses401ContentApplication1jsonSchema *shared.Onev211ClicksGetResponses401ContentApplication1jsonSchema
}
