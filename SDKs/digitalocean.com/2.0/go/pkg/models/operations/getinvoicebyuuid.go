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
	Amount           *string `json:"amount"`
	Description      *string `json:"description"`
	Duration         *string `json:"duration"`
	DurationUnit     *string `json:"duration_unit"`
	EndTime          *string `json:"end_time"`
	GroupDescription *string `json:"group_description"`
	Product          *string `json:"product"`
	ProjectName      *string `json:"project_name"`
	ResourceID       *string `json:"resource_id"`
	ResourceUUID     *string `json:"resource_uuid"`
	StartTime        *string `json:"start_time"`
}

type GetInvoiceByUUID200ApplicationJSONLinksPages1 struct {
	Last *string `json:"last"`
	Next *string `json:"next"`
}

type GetInvoiceByUUID200ApplicationJSONLinksPages2 struct {
	First *string `json:"first"`
	Prev  *string `json:"prev"`
}

type GetInvoiceByUUID200ApplicationJSONLinks struct {
	Pages *interface{} `json:"pages"`
}

type GetInvoiceByUUID200ApplicationJSONMeta struct {
	Total int64 `json:"total"`
}

type GetInvoiceByUUID200ApplicationJSON struct {
	InvoiceItems []GetInvoiceByUUID200ApplicationJSONInvoiceItems `json:"invoice_items"`
	Links        *GetInvoiceByUUID200ApplicationJSONLinks         `json:"links"`
	Meta         GetInvoiceByUUID200ApplicationJSONMeta           `json:"meta"`
}

type GetInvoiceByUUID401ApplicationJSON struct {
	ID        string  `json:"id"`
	Message   string  `json:"message"`
	RequestID *string `json:"request_id"`
}

type GetInvoiceByUUIDResponse struct {
	ContentType                                               string
	Headers                                                   map[string][]string
	StatusCode                                                int64
	GetInvoiceByUUID200ApplicationJSONObject                  *GetInvoiceByUUID200ApplicationJSON
	GetInvoiceByUUID401ApplicationJSONObject                  *GetInvoiceByUUID401ApplicationJSON
	Onev211ClicksGetResponses401ContentApplication1jsonSchema *shared.Onev211ClicksGetResponses401ContentApplication1jsonSchema
}
