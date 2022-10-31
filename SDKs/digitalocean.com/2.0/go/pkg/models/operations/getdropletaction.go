package operations

import (
"openapi/pkg/models/shared")

type GetDropletActionPathParams struct {
    ActionID int64 `pathParam:"style=simple,explode=false,name=action_id"`
    DropletID int64 `pathParam:"style=simple,explode=false,name=droplet_id"`
    
}

type GetDropletActionRequest struct {
    PathParams GetDropletActionPathParams 
    
}

type GetDropletAction401ApplicationJSON struct {
    ID string `json:"id"`
    Message string `json:"message"`
    RequestID *string `json:"request_id,omitempty"`
    
}

type GetDropletActionResponse struct {
    ContentType string 
    Headers map[string][]string 
    StatusCode int64 
    GetDropletAction200ApplicationJSONAny *interface{} 
    GetDropletAction401ApplicationJSONObject *GetDropletAction401ApplicationJSON 
    Onev211ClicksGetResponses401ContentApplication1jsonSchema *shared.Onev211ClicksGetResponses401ContentApplication1jsonSchema 
    
}

