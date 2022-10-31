package operations

import (
"openapi/pkg/models/shared")

type UpdateDatabaseClusterSizePathParams struct {
    DatabaseClusterUUID string `pathParam:"style=simple,explode=false,name=database_cluster_uuid"`
    
}

type UpdateDatabaseClusterSizeRequestBody struct {
    NumNodes int32 `json:"num_nodes"`
    Size string `json:"size"`
    
}

type UpdateDatabaseClusterSizeRequest struct {
    PathParams UpdateDatabaseClusterSizePathParams 
    Request UpdateDatabaseClusterSizeRequestBody `request:"mediaType=application/json"`
    
}

type UpdateDatabaseClusterSize401ApplicationJSON struct {
    ID string `json:"id"`
    Message string `json:"message"`
    RequestID *string `json:"request_id,omitempty"`
    
}

type UpdateDatabaseClusterSizeResponse struct {
    ContentType string 
    Headers map[string][]string 
    StatusCode int64 
    UpdateDatabaseClusterSize401ApplicationJSONObject *UpdateDatabaseClusterSize401ApplicationJSON 
    Onev211ClicksGetResponses401ContentApplication1jsonSchema *shared.Onev211ClicksGetResponses401ContentApplication1jsonSchema 
    
}

