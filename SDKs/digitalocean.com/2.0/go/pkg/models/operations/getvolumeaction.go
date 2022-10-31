package operations

import (
"openapi/pkg/models/shared")

type GetVolumeActionPathParams struct {
    ActionID int64 `pathParam:"style=simple,explode=false,name=action_id"`
    VolumeID string `pathParam:"style=simple,explode=false,name=volume_id"`
    
}

type GetVolumeActionQueryParams struct {
    Page *int64 `queryParam:"style=form,explode=true,name=page"`
    PerPage *int64 `queryParam:"style=form,explode=true,name=per_page"`
    
}

type GetVolumeActionRequest struct {
    PathParams GetVolumeActionPathParams 
    QueryParams GetVolumeActionQueryParams 
    
}

type GetVolumeAction401ApplicationJSON struct {
    ID string `json:"id"`
    Message string `json:"message"`
    RequestID *string `json:"request_id,omitempty"`
    
}

type GetVolumeActionResponse struct {
    ContentType string 
    Headers map[string][]string 
    StatusCode int64 
    GetVolumeAction200ApplicationJSONAny *interface{} 
    GetVolumeAction401ApplicationJSONObject *GetVolumeAction401ApplicationJSON 
    Onev211ClicksGetResponses401ContentApplication1jsonSchema *shared.Onev211ClicksGetResponses401ContentApplication1jsonSchema 
    
}

