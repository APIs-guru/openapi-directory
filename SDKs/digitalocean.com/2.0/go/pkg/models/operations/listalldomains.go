package operations

import (
	"openapi/pkg/models/shared"
)

type ListAllDomains200ApplicationJSONDomains struct {
	IPAddress *string `json:"ip_address"`
	Name      *string `json:"name"`
	TTL       *int64  `json:"ttl"`
	ZoneFile  *string `json:"zone_file"`
}

type ListAllDomains200ApplicationJSONLinksPages1 struct {
	Last *string `json:"last"`
	Next *string `json:"next"`
}

type ListAllDomains200ApplicationJSONLinksPages2 struct {
	First *string `json:"first"`
	Prev  *string `json:"prev"`
}

type ListAllDomains200ApplicationJSONLinks struct {
	Pages *interface{} `json:"pages"`
}

type ListAllDomains200ApplicationJSONMeta struct {
	Total int64 `json:"total"`
}

type ListAllDomains200ApplicationJSON struct {
	Domains []ListAllDomains200ApplicationJSONDomains `json:"domains"`
	Links   *ListAllDomains200ApplicationJSONLinks    `json:"links"`
	Meta    ListAllDomains200ApplicationJSONMeta      `json:"meta"`
}

type ListAllDomains401ApplicationJSON struct {
	ID        string  `json:"id"`
	Message   string  `json:"message"`
	RequestID *string `json:"request_id"`
}

type ListAllDomainsResponse struct {
	ContentType                                               string
	Headers                                                   map[string][]string
	StatusCode                                                int64
	ListAllDomains200ApplicationJSONObject                    *ListAllDomains200ApplicationJSON
	ListAllDomains401ApplicationJSONObject                    *ListAllDomains401ApplicationJSON
	Onev211ClicksGetResponses401ContentApplication1jsonSchema *shared.Onev211ClicksGetResponses401ContentApplication1jsonSchema
}
