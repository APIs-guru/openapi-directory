package operations

import (
	"openapi/pkg/models/shared"
)

type RemoveLoadBalancerDropletsPathParams struct {
	LbID string `pathParam:"style=simple,explode=false,name=lb_id"`
}

type RemoveLoadBalancerDropletsRequest struct {
	PathParams RemoveLoadBalancerDropletsPathParams
	Request    shared.Onev21loadBalancersPostRequestBodyContentApplication1jsonSchemaOneOf0AllOf0 `request:"mediaType=application/json"`
}

type RemoveLoadBalancerDroplets401ApplicationJSON struct {
	ID        string  `json:"id"`
	Message   string  `json:"message"`
	RequestID *string `json:"request_id,omitempty"`
}

type RemoveLoadBalancerDropletsResponse struct {
	ContentType                                               string
	Headers                                                   map[string][]string
	StatusCode                                                int64
	RemoveLoadBalancerDroplets401ApplicationJSONObject        *RemoveLoadBalancerDroplets401ApplicationJSON
	Onev211ClicksGetResponses401ContentApplication1jsonSchema *shared.Onev211ClicksGetResponses401ContentApplication1jsonSchema
}
