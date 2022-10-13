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
	CertificateID *string    `json:"certificate_id"`
	CreatedAt     *time.Time `json:"created_at"`
	CustomDomain  *string    `json:"custom_domain"`
	Endpoint      *string    `json:"endpoint"`
	ID            *string    `json:"id"`
	Origin        string     `json:"origin"`
	TTL           *int64     `json:"ttl"`
}

type ListCdnEndpoints200ApplicationJSONLinksPages1 struct {
	Last *string `json:"last"`
	Next *string `json:"next"`
}

type ListCdnEndpoints200ApplicationJSONLinksPages2 struct {
	First *string `json:"first"`
	Prev  *string `json:"prev"`
}

type ListCdnEndpoints200ApplicationJSONLinks struct {
	Pages *interface{} `json:"pages"`
}

type ListCdnEndpoints200ApplicationJSONMeta struct {
	Total int64 `json:"total"`
}

type ListCdnEndpoints200ApplicationJSON struct {
	Endpoints []ListCdnEndpoints200ApplicationJSONEndpoints `json:"endpoints"`
	Links     *ListCdnEndpoints200ApplicationJSONLinks      `json:"links"`
	Meta      ListCdnEndpoints200ApplicationJSONMeta        `json:"meta"`
}

type ListCdnEndpoints401ApplicationJSON struct {
	ID        string  `json:"id"`
	Message   string  `json:"message"`
	RequestID *string `json:"request_id"`
}

type ListCdnEndpointsResponse struct {
	ContentType                                               string
	Headers                                                   map[string][]string
	StatusCode                                                int64
	ListCdnEndpoints200ApplicationJSONObject                  *ListCdnEndpoints200ApplicationJSON
	ListCdnEndpoints401ApplicationJSONObject                  *ListCdnEndpoints401ApplicationJSON
	Onev211ClicksGetResponses401ContentApplication1jsonSchema *shared.Onev211ClicksGetResponses401ContentApplication1jsonSchema
}
