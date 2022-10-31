package operations

import (
"openapi/pkg/models/shared")

type DestroyDropletPathParams struct {
    DropletID int64 `pathParam:"style=simple,explode=false,name=droplet_id"`
    
}

type DestroyDropletRequest struct {
    PathParams DestroyDropletPathParams 
    
}

type DestroyDroplet401ApplicationJSON struct {
    ID string `json:"id"`
    Message string `json:"message"`
    RequestID *string `json:"request_id,omitempty"`
    
}

type DestroyDropletResponse struct {
    ContentType string 
    Headers map[string][]string 
    StatusCode int64 
    DestroyDroplet401ApplicationJSONObject *DestroyDroplet401ApplicationJSON 
    Onev211ClicksGetResponses401ContentApplication1jsonSchema *shared.Onev211ClicksGetResponses401ContentApplication1jsonSchema 
    
}

