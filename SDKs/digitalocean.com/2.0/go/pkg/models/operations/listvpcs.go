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
	Last *string `json:"last,omitempty"`
	Next *string `json:"next,omitempty"`
}

type ListVpcs200ApplicationJSONLinksPages2 struct {
	First *string `json:"first,omitempty"`
	Prev  *string `json:"prev,omitempty"`
}

type ListVpcs200ApplicationJSONLinks struct {
	Pages *interface{} `json:"pages,omitempty"`
}

type ListVpcs200ApplicationJSONMeta struct {
	Total int64 `json:"total"`
}

type ListVpcs200ApplicationJSONVpcs struct {
	CreatedAt   *time.Time `json:"created_at,omitempty"`
	Default     *bool      `json:"default,omitempty"`
	Description *string    `json:"description,omitempty"`
	ID          *string    `json:"id,omitempty"`
	IPRange     *string    `json:"ip_range,omitempty"`
	Name        *string    `json:"name,omitempty"`
	Region      *string    `json:"region,omitempty"`
	Urn         *string    `json:"urn,omitempty"`
}

type ListVpcs200ApplicationJSON struct {
	Links *ListVpcs200ApplicationJSONLinks `json:"links,omitempty"`
	Meta  ListVpcs200ApplicationJSONMeta   `json:"meta"`
	Vpcs  []ListVpcs200ApplicationJSONVpcs `json:"vpcs,omitempty"`
}

type ListVpcs401ApplicationJSON struct {
	ID        string  `json:"id"`
	Message   string  `json:"message"`
	RequestID *string `json:"request_id,omitempty"`
}

type ListVpcsResponse struct {
	ContentType                                               string
	Headers                                                   map[string][]string
	StatusCode                                                int64
	ListVpcs200ApplicationJSONObject                          *ListVpcs200ApplicationJSON
	ListVpcs401ApplicationJSONObject                          *ListVpcs401ApplicationJSON
	Onev211ClicksGetResponses401ContentApplication1jsonSchema *shared.Onev211ClicksGetResponses401ContentApplication1jsonSchema
}
