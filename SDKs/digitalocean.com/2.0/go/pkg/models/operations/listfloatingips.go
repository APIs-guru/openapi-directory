package operations

import (
	"openapi/pkg/models/shared"
)

type ListFloatingIps200ApplicationJSONFloatingIpsRegion struct {
	Available bool        `json:"available"`
	Features  interface{} `json:"features"`
	Name      string      `json:"name"`
	Sizes     interface{} `json:"sizes"`
	Slug      string      `json:"slug"`
}

type ListFloatingIps200ApplicationJSONFloatingIps struct {
	Droplet *interface{}                                        `json:"droplet"`
	IP      *string                                             `json:"ip"`
	Locked  *bool                                               `json:"locked"`
	Region  *ListFloatingIps200ApplicationJSONFloatingIpsRegion `json:"region"`
}

type ListFloatingIps200ApplicationJSONLinksPages1 struct {
	Last *string `json:"last"`
	Next *string `json:"next"`
}

type ListFloatingIps200ApplicationJSONLinksPages2 struct {
	First *string `json:"first"`
	Prev  *string `json:"prev"`
}

type ListFloatingIps200ApplicationJSONLinks struct {
	Pages *interface{} `json:"pages"`
}

type ListFloatingIps200ApplicationJSONMeta struct {
	Total int64 `json:"total"`
}

type ListFloatingIps200ApplicationJSON struct {
	FloatingIps []ListFloatingIps200ApplicationJSONFloatingIps `json:"floating_ips"`
	Links       *ListFloatingIps200ApplicationJSONLinks        `json:"links"`
	Meta        ListFloatingIps200ApplicationJSONMeta          `json:"meta"`
}

type ListFloatingIps401ApplicationJSON struct {
	ID        string  `json:"id"`
	Message   string  `json:"message"`
	RequestID *string `json:"request_id"`
}

type ListFloatingIpsResponse struct {
	ContentType                                               string
	Headers                                                   map[string][]string
	StatusCode                                                int64
	ListFloatingIps200ApplicationJSONObject                   *ListFloatingIps200ApplicationJSON
	ListFloatingIps401ApplicationJSONObject                   *ListFloatingIps401ApplicationJSON
	Onev211ClicksGetResponses401ContentApplication1jsonSchema *shared.Onev211ClicksGetResponses401ContentApplication1jsonSchema
}
