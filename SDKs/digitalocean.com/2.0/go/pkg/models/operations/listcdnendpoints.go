package operations

import (
	"openapi/pkg/models/shared"
	"time"
)

type ListCdnEndpointsQueryParams struct {
	Page    *int64 `queryParam:"style=form,explode=true,name=page"`
	PerPage *int64 `queryParam:"style=form,explode=true,name=per_page"`
}

type ListCdnEndpointsRequest struct {
	QueryParams ListCdnEndpointsQueryParams
}

type ListCdnEndpoints200ApplicationJSONEndpoints struct {
	CertificateID *string    `json:"certificate_id,omitempty"`
	CreatedAt     *time.Time `json:"created_at,omitempty"`
	CustomDomain  *string    `json:"custom_domain,omitempty"`
	Endpoint      *string    `json:"endpoint,omitempty"`
	ID            *string    `json:"id,omitempty"`
	Origin        string     `json:"origin"`
	TTL           *int64     `json:"ttl,omitempty"`
}

type ListCdnEndpoints200ApplicationJSONLinksPages1 struct {
	Last *string `json:"last,omitempty"`
	Next *string `json:"next,omitempty"`
}

type ListCdnEndpoints200ApplicationJSONLinksPages2 struct {
	First *string `json:"first,omitempty"`
	Prev  *string `json:"prev,omitempty"`
}

type ListCdnEndpoints200ApplicationJSONLinks struct {
	Pages *interface{} `json:"pages,omitempty"`
}

type ListCdnEndpoints200ApplicationJSONMeta struct {
	Total int64 `json:"total"`
}

type ListCdnEndpoints200ApplicationJSON struct {
	Endpoints []ListCdnEndpoints200ApplicationJSONEndpoints `json:"endpoints,omitempty"`
	Links     *ListCdnEndpoints200ApplicationJSONLinks      `json:"links,omitempty"`
	Meta      ListCdnEndpoints200ApplicationJSONMeta        `json:"meta"`
}

type ListCdnEndpoints401ApplicationJSON struct {
	ID        string  `json:"id"`
	Message   string  `json:"message"`
	RequestID *string `json:"request_id,omitempty"`
}

type ListCdnEndpointsResponse struct {
	ContentType                                               string
	Headers                                                   map[string][]string
	StatusCode                                                int64
	ListCdnEndpoints200ApplicationJSONObject                  *ListCdnEndpoints200ApplicationJSON
	ListCdnEndpoints401ApplicationJSONObject                  *ListCdnEndpoints401ApplicationJSON
	Onev211ClicksGetResponses401ContentApplication1jsonSchema *shared.Onev211ClicksGetResponses401ContentApplication1jsonSchema
}
