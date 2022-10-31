package operations

import (
"openapi/pkg/models/shared")

type DestroyWithAssociatedResourcesSelectivePathParams struct {
    DropletID int64 `pathParam:"style=simple,explode=false,name=droplet_id"`
    
}

type DestroyWithAssociatedResourcesSelectiveRequest struct {
    PathParams DestroyWithAssociatedResourcesSelectivePathParams 
    
}

type DestroyWithAssociatedResourcesSelective401ApplicationJSON struct {
    ID string `json:"id"`
    Message string `json:"message"`
    RequestID *string `json:"request_id,omitempty"`
    
}

type DestroyWithAssociatedResourcesSelectiveResponse struct {
    ContentType string 
    Headers map[string][]string 
    StatusCode int64 
    DestroyWithAssociatedResourcesSelective401ApplicationJSONObject *DestroyWithAssociatedResourcesSelective401ApplicationJSON 
    Onev211ClicksGetResponses401ContentApplication1jsonSchema *shared.Onev211ClicksGetResponses401ContentApplication1jsonSchema 
    
}

