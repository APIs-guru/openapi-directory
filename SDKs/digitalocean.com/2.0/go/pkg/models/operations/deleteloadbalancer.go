package operations

import (
	"openapi/pkg/models/shared"
)

type DeleteLoadBalancerPathParams struct {
	LbID string `pathParam:"style=simple,explode=false,name=lb_id"`
}

type DeleteLoadBalancerRequest struct {
	PathParams DeleteLoadBalancerPathParams
}

type DeleteLoadBalancer401ApplicationJSON struct {
	ID        string  `json:"id"`
	Message   string  `json:"message"`
	RequestID *string `json:"request_id,omitempty"`
}

type DeleteLoadBalancerResponse struct {
	ContentType                                               string
	Headers                                                   map[string][]string
	StatusCode                                                int64
	DeleteLoadBalancer401ApplicationJSONObject                *DeleteLoadBalancer401ApplicationJSON
	Onev211ClicksGetResponses401ContentApplication1jsonSchema *shared.Onev211ClicksGetResponses401ContentApplication1jsonSchema
}
