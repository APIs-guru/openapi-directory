package operations

import (
"openapi/pkg/models/shared")

type GetVolumeSnapshotByIDPathParams struct {
    SnapshotID interface{} `pathParam:"style=simple,explode=false,name=snapshot_id"`
    
}

type GetVolumeSnapshotByIDRequest struct {
    PathParams GetVolumeSnapshotByIDPathParams 
    
}

type GetVolumeSnapshotByID401ApplicationJSON struct {
    ID string `json:"id"`
    Message string `json:"message"`
    RequestID *string `json:"request_id,omitempty"`
    
}

type GetVolumeSnapshotByIDResponse struct {
    ContentType string 
    Headers map[string][]string 
    StatusCode int64 
    GetVolumeSnapshotByID200ApplicationJSONAny *interface{} 
    GetVolumeSnapshotByID401ApplicationJSONObject *GetVolumeSnapshotByID401ApplicationJSON 
    Onev211ClicksGetResponses401ContentApplication1jsonSchema *shared.Onev211ClicksGetResponses401ContentApplication1jsonSchema 
    
}

