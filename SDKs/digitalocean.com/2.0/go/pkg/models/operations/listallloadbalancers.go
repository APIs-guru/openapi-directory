package operations

import (
	"openapi/pkg/models/shared"
)

type ListAllLoadBalancersQueryParams struct {
	Page    *int64 `queryParam:"style=form,explode=true,name=page"`
	PerPage *int64 `queryParam:"style=form,explode=true,name=per_page"`
}

type ListAllLoadBalancersRequest struct {
	QueryParams ListAllLoadBalancersQueryParams
}

type ListAllLoadBalancers200ApplicationJSONLinksPages1 struct {
	Last *string `json:"last"`
	Next *string `json:"next"`
}

type ListAllLoadBalancers200ApplicationJSONLinksPages2 struct {
	First *string `json:"first"`
	Prev  *string `json:"prev"`
}

type ListAllLoadBalancers200ApplicationJSONLinks struct {
	Pages *interface{} `json:"pages"`
}

type ListAllLoadBalancers200ApplicationJSONMeta struct {
	Total int64 `json:"total"`
}

type ListAllLoadBalancers200ApplicationJSON struct {
	Links         *ListAllLoadBalancers200ApplicationJSONLinks                                                    `json:"links"`
	LoadBalancers []shared.Onev21loadBalancersPostResponses202ContentApplication1jsonSchemaPropertiesLoadBalancer `json:"load_balancers"`
	Meta          ListAllLoadBalancers200ApplicationJSONMeta                                                      `json:"meta"`
}

type ListAllLoadBalancers401ApplicationJSON struct {
	ID        string  `json:"id"`
	Message   string  `json:"message"`
	RequestID *string `json:"request_id"`
}

type ListAllLoadBalancersResponse struct {
	ContentType                                               string
	Headers                                                   map[string][]string
	StatusCode                                                int64
	ListAllLoadBalancers200ApplicationJSONObject              *ListAllLoadBalancers200ApplicationJSON
	ListAllLoadBalancers401ApplicationJSONObject              *ListAllLoadBalancers401ApplicationJSON
	Onev211ClicksGetResponses401ContentApplication1jsonSchema *shared.Onev211ClicksGetResponses401ContentApplication1jsonSchema
}
