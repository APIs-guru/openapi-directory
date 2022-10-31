package operations

import (
"openapi/pkg/models/shared")

type DeleteFirewallPathParams struct {
    FirewallID string `pathParam:"style=simple,explode=false,name=firewall_id"`
    
}

type DeleteFirewallRequest struct {
    PathParams DeleteFirewallPathParams 
    
}

type DeleteFirewall401ApplicationJSON struct {
    ID string `json:"id"`
    Message string `json:"message"`
    RequestID *string `json:"request_id,omitempty"`
    
}

type DeleteFirewallResponse struct {
    ContentType string 
    Headers map[string][]string 
    StatusCode int64 
    DeleteFirewall401ApplicationJSONObject *DeleteFirewall401ApplicationJSON 
    Onev211ClicksGetResponses401ContentApplication1jsonSchema *shared.Onev211ClicksGetResponses401ContentApplication1jsonSchema 
    
}

