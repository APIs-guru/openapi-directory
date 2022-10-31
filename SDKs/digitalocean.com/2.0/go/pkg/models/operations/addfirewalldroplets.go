package operations

import (
"openapi/pkg/models/shared")

type AddFirewallDropletsPathParams struct {
    FirewallID string `pathParam:"style=simple,explode=false,name=firewall_id"`
    
}

type AddFirewallDropletsRequest struct {
    PathParams AddFirewallDropletsPathParams 
    Request *interface{} `request:"mediaType=application/json"`
    
}

type AddFirewallDroplets401ApplicationJSON struct {
    ID string `json:"id"`
    Message string `json:"message"`
    RequestID *string `json:"request_id,omitempty"`
    
}

type AddFirewallDropletsResponse struct {
    ContentType string 
    Headers map[string][]string 
    StatusCode int64 
    AddFirewallDroplets401ApplicationJSONObject *AddFirewallDroplets401ApplicationJSON 
    Onev211ClicksGetResponses401ContentApplication1jsonSchema *shared.Onev211ClicksGetResponses401ContentApplication1jsonSchema 
    
}

