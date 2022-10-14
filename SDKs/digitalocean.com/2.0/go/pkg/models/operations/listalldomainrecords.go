package operations

import (
	"openapi/pkg/models/shared"
)

type ListAllDomainRecordsPathParams struct {
	DomainName string `pathParam:"style=simple,explode=false,name=domain_name"`
}

type ListAllDomainRecordsTypeEnum string

const (
	ListAllDomainRecordsTypeEnumA     ListAllDomainRecordsTypeEnum = "A"
	ListAllDomainRecordsTypeEnumAaaa  ListAllDomainRecordsTypeEnum = "AAAA"
	ListAllDomainRecordsTypeEnumCaa   ListAllDomainRecordsTypeEnum = "CAA"
	ListAllDomainRecordsTypeEnumCname ListAllDomainRecordsTypeEnum = "CNAME"
	ListAllDomainRecordsTypeEnumMx    ListAllDomainRecordsTypeEnum = "MX"
	ListAllDomainRecordsTypeEnumNs    ListAllDomainRecordsTypeEnum = "NS"
	ListAllDomainRecordsTypeEnumSoa   ListAllDomainRecordsTypeEnum = "SOA"
	ListAllDomainRecordsTypeEnumSrv   ListAllDomainRecordsTypeEnum = "SRV"
	ListAllDomainRecordsTypeEnumTxt   ListAllDomainRecordsTypeEnum = "TXT"
)

type ListAllDomainRecordsQueryParams struct {
	Name *string                       `queryParam:"style=form,explode=true,name=name"`
	Type *ListAllDomainRecordsTypeEnum `queryParam:"style=form,explode=true,name=type"`
}

type ListAllDomainRecordsRequest struct {
	PathParams  ListAllDomainRecordsPathParams
	QueryParams ListAllDomainRecordsQueryParams
}

type ListAllDomainRecords200ApplicationJSONDomainRecords struct {
	Data     *string `json:"data,omitempty"`
	Flags    *int64  `json:"flags,omitempty"`
	ID       *int64  `json:"id,omitempty"`
	Name     *string `json:"name,omitempty"`
	Port     *int64  `json:"port,omitempty"`
	Priority *int64  `json:"priority,omitempty"`
	Tag      *string `json:"tag,omitempty"`
	TTL      *int64  `json:"ttl,omitempty"`
	Type     string  `json:"type"`
	Weight   *int64  `json:"weight,omitempty"`
}

type ListAllDomainRecords200ApplicationJSONLinksPages1 struct {
	Last *string `json:"last,omitempty"`
	Next *string `json:"next,omitempty"`
}

type ListAllDomainRecords200ApplicationJSONLinksPages2 struct {
	First *string `json:"first,omitempty"`
	Prev  *string `json:"prev,omitempty"`
}

type ListAllDomainRecords200ApplicationJSONLinks struct {
	Pages *interface{} `json:"pages,omitempty"`
}

type ListAllDomainRecords200ApplicationJSONMeta struct {
	Total int64 `json:"total"`
}

type ListAllDomainRecords200ApplicationJSON struct {
	DomainRecords []ListAllDomainRecords200ApplicationJSONDomainRecords `json:"domain_records,omitempty"`
	Links         *ListAllDomainRecords200ApplicationJSONLinks          `json:"links,omitempty"`
	Meta          ListAllDomainRecords200ApplicationJSONMeta            `json:"meta"`
}

type ListAllDomainRecords401ApplicationJSON struct {
	ID        string  `json:"id"`
	Message   string  `json:"message"`
	RequestID *string `json:"request_id,omitempty"`
}

type ListAllDomainRecordsResponse struct {
	ContentType                                               string
	Headers                                                   map[string][]string
	StatusCode                                                int64
	ListAllDomainRecords200ApplicationJSONObject              *ListAllDomainRecords200ApplicationJSON
	ListAllDomainRecords401ApplicationJSONObject              *ListAllDomainRecords401ApplicationJSON
	Onev211ClicksGetResponses401ContentApplication1jsonSchema *shared.Onev211ClicksGetResponses401ContentApplication1jsonSchema
}
