package operations

import (
	"openapi/pkg/models/shared"
)

type AddLoadBalancerForwardingRulesPathParams struct {
	LbID string `pathParam:"style=simple,explode=false,name=lb_id"`
}

type AddLoadBalancerForwardingRulesRequest struct {
	PathParams AddLoadBalancerForwardingRulesPathParams
	Request    interface{} `request:"mediaType=application/json"`
}

type AddLoadBalancerForwardingRules401ApplicationJSON struct {
	ID        string  `json:"id"`
	Message   string  `json:"message"`
	RequestID *string `json:"request_id,omitempty"`
}

type AddLoadBalancerForwardingRulesResponse struct {
	ContentType                                               string
	Headers                                                   map[string][]string
	StatusCode                                                int64
	AddLoadBalancerForwardingRules401ApplicationJSONObject    *AddLoadBalancerForwardingRules401ApplicationJSON
	Onev211ClicksGetResponses401ContentApplication1jsonSchema *shared.Onev211ClicksGetResponses401ContentApplication1jsonSchema
}
