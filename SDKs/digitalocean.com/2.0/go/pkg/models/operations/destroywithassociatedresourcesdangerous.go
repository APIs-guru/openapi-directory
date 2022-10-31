package operations

import (
"openapi/pkg/models/shared")

type DestroyWithAssociatedResourcesDangerousPathParams struct {
    DropletID int64 `pathParam:"style=simple,explode=false,name=droplet_id"`
    
}

type DestroyWithAssociatedResourcesDangerousHeaders struct {
    XDangerous bool `header:"style=simple,explode=false,name=X-Dangerous"`
    
}

type DestroyWithAssociatedResourcesDangerousRequest struct {
    PathParams DestroyWithAssociatedResourcesDangerousPathParams 
    Headers DestroyWithAssociatedResourcesDangerousHeaders 
    
}

type DestroyWithAssociatedResourcesDangerous401ApplicationJSON struct {
    ID string `json:"id"`
    Message string `json:"message"`
    RequestID *string `json:"request_id,omitempty"`
    
}

type DestroyWithAssociatedResourcesDangerousResponse struct {
    ContentType string 
    Headers map[string][]string 
    StatusCode int64 
    DestroyWithAssociatedResourcesDangerous401ApplicationJSONObject *DestroyWithAssociatedResourcesDangerous401ApplicationJSON 
    Onev211ClicksGetResponses401ContentApplication1jsonSchema *shared.Onev211ClicksGetResponses401ContentApplication1jsonSchema 
    
}

