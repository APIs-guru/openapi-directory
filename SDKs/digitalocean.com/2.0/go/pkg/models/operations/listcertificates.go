package operations

import (
	"openapi/pkg/models/shared"
	"time"
)

type ListCertificatesQueryParams struct {
	Page    *int64 `queryParam:"style=form,explode=true,name=page"`
	PerPage *int64 `queryParam:"style=form,explode=true,name=per_page"`
}

type ListCertificatesRequest struct {
	QueryParams ListCertificatesQueryParams
}

type ListCertificates200ApplicationJSONCertificatesStateEnum string

const (
	ListCertificates200ApplicationJSONCertificatesStateEnumPending  ListCertificates200ApplicationJSONCertificatesStateEnum = "pending"
	ListCertificates200ApplicationJSONCertificatesStateEnumVerified ListCertificates200ApplicationJSONCertificatesStateEnum = "verified"
	ListCertificates200ApplicationJSONCertificatesStateEnumError    ListCertificates200ApplicationJSONCertificatesStateEnum = "error"
)

type ListCertificates200ApplicationJSONCertificatesTypeEnum string

const (
	ListCertificates200ApplicationJSONCertificatesTypeEnumCustom      ListCertificates200ApplicationJSONCertificatesTypeEnum = "custom"
	ListCertificates200ApplicationJSONCertificatesTypeEnumLetsEncrypt ListCertificates200ApplicationJSONCertificatesTypeEnum = "lets_encrypt"
)

type ListCertificates200ApplicationJSONCertificates struct {
	CreatedAt       *time.Time                                               `json:"created_at,omitempty"`
	DNSNames        []string                                                 `json:"dns_names,omitempty"`
	ID              *string                                                  `json:"id,omitempty"`
	Name            *string                                                  `json:"name,omitempty"`
	NotAfter        *time.Time                                               `json:"not_after,omitempty"`
	Sha1Fingerprint *string                                                  `json:"sha1_fingerprint,omitempty"`
	State           *ListCertificates200ApplicationJSONCertificatesStateEnum `json:"state,omitempty"`
	Type            *ListCertificates200ApplicationJSONCertificatesTypeEnum  `json:"type,omitempty"`
}

type ListCertificates200ApplicationJSONLinksPages1 struct {
	Last *string `json:"last,omitempty"`
	Next *string `json:"next,omitempty"`
}

type ListCertificates200ApplicationJSONLinksPages2 struct {
	First *string `json:"first,omitempty"`
	Prev  *string `json:"prev,omitempty"`
}

type ListCertificates200ApplicationJSONLinks struct {
	Pages *interface{} `json:"pages,omitempty"`
}

type ListCertificates200ApplicationJSONMeta struct {
	Total int64 `json:"total"`
}

type ListCertificates200ApplicationJSON struct {
	Certificates []ListCertificates200ApplicationJSONCertificates `json:"certificates,omitempty"`
	Links        *ListCertificates200ApplicationJSONLinks         `json:"links,omitempty"`
	Meta         ListCertificates200ApplicationJSONMeta           `json:"meta"`
}

type ListCertificates401ApplicationJSON struct {
	ID        string  `json:"id"`
	Message   string  `json:"message"`
	RequestID *string `json:"request_id,omitempty"`
}

type ListCertificatesResponse struct {
	ContentType                                               string
	Headers                                                   map[string][]string
	StatusCode                                                int64
	ListCertificates200ApplicationJSONObject                  *ListCertificates200ApplicationJSON
	ListCertificates401ApplicationJSONObject                  *ListCertificates401ApplicationJSON
	Onev211ClicksGetResponses401ContentApplication1jsonSchema *shared.Onev211ClicksGetResponses401ContentApplication1jsonSchema
}
