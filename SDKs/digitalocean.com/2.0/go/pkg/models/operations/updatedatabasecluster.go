package operations

import (
"openapi/pkg/models/shared")

type UpdateDatabaseClusterPathParams struct {
    DatabaseClusterUUID string `pathParam:"style=simple,explode=false,name=database_cluster_uuid"`
    
}

type UpdateDatabaseClusterRequestBody struct {
    Region string `json:"region"`
    
}

type UpdateDatabaseClusterRequest struct {
    PathParams UpdateDatabaseClusterPathParams 
    Request UpdateDatabaseClusterRequestBody `request:"mediaType=application/json"`
    
}

type UpdateDatabaseCluster401ApplicationJSON struct {
    ID string `json:"id"`
    Message string `json:"message"`
    RequestID *string `json:"request_id,omitempty"`
    
}

type UpdateDatabaseClusterResponse struct {
    ContentType string 
    Headers map[string][]string 
    StatusCode int64 
    UpdateDatabaseCluster401ApplicationJSONObject *UpdateDatabaseCluster401ApplicationJSON 
    Onev211ClicksGetResponses401ContentApplication1jsonSchema *shared.Onev211ClicksGetResponses401ContentApplication1jsonSchema 
    
}

