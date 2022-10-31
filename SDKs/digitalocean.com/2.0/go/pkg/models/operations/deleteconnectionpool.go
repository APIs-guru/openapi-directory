package operations

import (
"openapi/pkg/models/shared")

type DeleteConnectionPoolPathParams struct {
    DatabaseClusterUUID string `pathParam:"style=simple,explode=false,name=database_cluster_uuid"`
    PoolName string `pathParam:"style=simple,explode=false,name=pool_name"`
    
}

type DeleteConnectionPoolRequest struct {
    PathParams DeleteConnectionPoolPathParams 
    
}

type DeleteConnectionPool401ApplicationJSON struct {
    ID string `json:"id"`
    Message string `json:"message"`
    RequestID *string `json:"request_id,omitempty"`
    
}

type DeleteConnectionPoolResponse struct {
    ContentType string 
    Headers map[string][]string 
    StatusCode int64 
    DeleteConnectionPool401ApplicationJSONObject *DeleteConnectionPool401ApplicationJSON 
    Onev211ClicksGetResponses401ContentApplication1jsonSchema *shared.Onev211ClicksGetResponses401ContentApplication1jsonSchema 
    
}

