package operations

import (
	"openapi/pkg/models/shared"
)

type AddLoadBalancerDropletsPathParams struct {
	LbID string `pathParam:"style=simple,explode=false,name=lb_id"`
}

type AddLoadBalancerDropletsRequest struct {
	PathParams AddLoadBalancerDropletsPathParams
	Request    shared.Onev21loadBalancersPostRequestBodyContentApplication1jsonSchemaOneOf0AllOf0 `request:"mediaType=application/json"`
}

type AddLoadBalancerDroplets401ApplicationJSON struct {
	ID        string  `json:"id"`
	Message   string  `json:"message"`
	RequestID *string `json:"request_id"`
}

type AddLoadBalancerDropletsResponse struct {
	ContentType                                               string
	Headers                                                   map[string][]string
	StatusCode                                                int64
	AddLoadBalancerDroplets401ApplicationJSONObject           *AddLoadBalancerDroplets401ApplicationJSON
	Onev211ClicksGetResponses401ContentApplication1jsonSchema *shared.Onev211ClicksGetResponses401ContentApplication1jsonSchema
}
