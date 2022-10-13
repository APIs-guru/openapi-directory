package operations

import (
	"openapi/pkg/models/shared"
)

type RemoveLoadBalancerForwardingRulesPathParams struct {
	LbID string `pathParam:"style=simple,explode=false,name=lb_id"`
}

type RemoveLoadBalancerForwardingRulesRequest struct {
	PathParams RemoveLoadBalancerForwardingRulesPathParams
	Request    interface{} `request:"mediaType=application/json"`
}

type RemoveLoadBalancerForwardingRules401ApplicationJSON struct {
	ID        string  `json:"id"`
	Message   string  `json:"message"`
	RequestID *string `json:"request_id"`
}

type RemoveLoadBalancerForwardingRulesResponse struct {
	ContentType                                               string
	Headers                                                   map[string][]string
	StatusCode                                                int64
	RemoveLoadBalancerForwardingRules401ApplicationJSONObject *RemoveLoadBalancerForwardingRules401ApplicationJSON
	Onev211ClicksGetResponses401ContentApplication1jsonSchema *shared.Onev211ClicksGetResponses401ContentApplication1jsonSchema
}
