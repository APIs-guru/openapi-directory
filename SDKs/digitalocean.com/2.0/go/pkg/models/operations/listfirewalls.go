package operations

import (
	"openapi/pkg/models/shared"
)

type ListFirewallsQueryParams struct {
	Page    *int64 `queryParam:"style=form,explode=true,name=page"`
	PerPage *int64 `queryParam:"style=form,explode=true,name=per_page"`
}

type ListFirewallsRequest struct {
	QueryParams ListFirewallsQueryParams
}

type ListFirewalls200ApplicationJSONLinksPages1 struct {
	Last *string `json:"last"`
	Next *string `json:"next"`
}

type ListFirewalls200ApplicationJSONLinksPages2 struct {
	First *string `json:"first"`
	Prev  *string `json:"prev"`
}

type ListFirewalls200ApplicationJSONLinks struct {
	Pages *interface{} `json:"pages"`
}

type ListFirewalls200ApplicationJSONMeta struct {
	Total int64 `json:"total"`
}

type ListFirewalls200ApplicationJSON struct {
	Firewalls []shared.Onev21droplets1Percent7BdropletIDPercent7D1firewallsGetResponses200ContentApplication1jsonSchemaAllOf0PropertiesFirewallsItems `json:"firewalls"`
	Links     *ListFirewalls200ApplicationJSONLinks                                                                                                   `json:"links"`
	Meta      ListFirewalls200ApplicationJSONMeta                                                                                                     `json:"meta"`
}

type ListFirewalls401ApplicationJSON struct {
	ID        string  `json:"id"`
	Message   string  `json:"message"`
	RequestID *string `json:"request_id"`
}

type ListFirewallsResponse struct {
	ContentType                                               string
	Headers                                                   map[string][]string
	StatusCode                                                int64
	ListFirewalls200ApplicationJSONObject                     *ListFirewalls200ApplicationJSON
	ListFirewalls401ApplicationJSONObject                     *ListFirewalls401ApplicationJSON
	Onev211ClicksGetResponses401ContentApplication1jsonSchema *shared.Onev211ClicksGetResponses401ContentApplication1jsonSchema
}
