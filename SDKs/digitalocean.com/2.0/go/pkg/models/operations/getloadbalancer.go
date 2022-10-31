package operations

import (
"openapi/pkg/models/shared")

type GetLoadBalancerPathParams struct {
    LbID string `pathParam:"style=simple,explode=false,name=lb_id"`
    
}

type GetLoadBalancerRequest struct {
    PathParams GetLoadBalancerPathParams 
    
}

type GetLoadBalancer401ApplicationJSON struct {
    ID string `json:"id"`
    Message string `json:"message"`
    RequestID *string `json:"request_id,omitempty"`
    
}

type GetLoadBalancerResponse struct {
    ContentType string 
    Headers map[string][]string 
    StatusCode int64 
    GetLoadBalancer200ApplicationJSONAny *interface{} 
    GetLoadBalancer401ApplicationJSONObject *GetLoadBalancer401ApplicationJSON 
    Onev211ClicksGetResponses401ContentApplication1jsonSchema *shared.Onev211ClicksGetResponses401ContentApplication1jsonSchema 
    
}

