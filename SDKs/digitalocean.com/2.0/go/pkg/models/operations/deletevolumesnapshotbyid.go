package operations

import (
"openapi/pkg/models/shared")

type DeleteVolumeSnapshotByIDPathParams struct {
    SnapshotID interface{} `pathParam:"style=simple,explode=false,name=snapshot_id"`
    
}

type DeleteVolumeSnapshotByIDRequest struct {
    PathParams DeleteVolumeSnapshotByIDPathParams 
    
}

type DeleteVolumeSnapshotByID401ApplicationJSON struct {
    ID string `json:"id"`
    Message string `json:"message"`
    RequestID *string `json:"request_id,omitempty"`
    
}

type DeleteVolumeSnapshotByIDResponse struct {
    ContentType string 
    Headers map[string][]string 
    StatusCode int64 
    DeleteVolumeSnapshotByID401ApplicationJSONObject *DeleteVolumeSnapshotByID401ApplicationJSON 
    Onev211ClicksGetResponses401ContentApplication1jsonSchema *shared.Onev211ClicksGetResponses401ContentApplication1jsonSchema 
    
}

