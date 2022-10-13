package operations

import (
	"openapi/pkg/models/shared"
	"time"
)

type ListVpcsQueryParams struct {
	Page    *int64 `queryParam:"style=form,explode=true,name=page"`
	PerPage *int64 `queryParam:"style=form,explode=true,name=per_page"`
}

type ListVpcsRequest struct {
	QueryParams ListVpcsQueryParams
}

type ListVpcs200ApplicationJSONLinksPages1 struct {
	Last *string `json:"last"`
	Next *string `json:"next"`
}

type ListVpcs200ApplicationJSONLinksPages2 struct {
	First *string `json:"first"`
	Prev  *string `json:"prev"`
}

type ListVpcs200ApplicationJSONLinks struct {
	Pages *interface{} `json:"pages"`
}

type ListVpcs200ApplicationJSONMeta struct {
	Total int64 `json:"total"`
}

type ListVpcs200ApplicationJSONVpcs struct {
	CreatedAt   *time.Time `json:"created_at"`
	Default     *bool      `json:"default"`
	Description *string    `json:"description"`
	ID          *string    `json:"id"`
	IPRange     *string    `json:"ip_range"`
	Name        *string    `json:"name"`
	Region      *string    `json:"region"`
	Urn         *string    `json:"urn"`
}

type ListVpcs200ApplicationJSON struct {
	Links *ListVpcs200ApplicationJSONLinks `json:"links"`
	Meta  ListVpcs200ApplicationJSONMeta   `json:"meta"`
	Vpcs  []ListVpcs200ApplicationJSONVpcs `json:"vpcs"`
}

type ListVpcs401ApplicationJSON struct {
	ID        string  `json:"id"`
	Message   string  `json:"message"`
	RequestID *string `json:"request_id"`
}

type ListVpcsResponse struct {
	ContentType                                               string
	Headers                                                   map[string][]string
	StatusCode                                                int64
	ListVpcs200ApplicationJSONObject                          *ListVpcs200ApplicationJSON
	ListVpcs401ApplicationJSONObject                          *ListVpcs401ApplicationJSON
	Onev211ClicksGetResponses401ContentApplication1jsonSchema *shared.Onev211ClicksGetResponses401ContentApplication1jsonSchema
}
