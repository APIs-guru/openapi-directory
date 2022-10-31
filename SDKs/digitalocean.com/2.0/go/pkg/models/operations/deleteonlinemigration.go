package operations

import (
"openapi/pkg/models/shared")

type DeleteOnlineMigrationPathParams struct {
    DatabaseClusterUUID string `pathParam:"style=simple,explode=false,name=database_cluster_uuid"`
    MigrationID string `pathParam:"style=simple,explode=false,name=migration_id"`
    
}

type DeleteOnlineMigrationRequest struct {
    PathParams DeleteOnlineMigrationPathParams 
    
}

type DeleteOnlineMigration401ApplicationJSON struct {
    ID string `json:"id"`
    Message string `json:"message"`
    RequestID *string `json:"request_id,omitempty"`
    
}

type DeleteOnlineMigrationResponse struct {
    ContentType string 
    Headers map[string][]string 
    StatusCode int64 
    DeleteOnlineMigration401ApplicationJSONObject *DeleteOnlineMigration401ApplicationJSON 
    Onev211ClicksGetResponses401ContentApplication1jsonSchema *shared.Onev211ClicksGetResponses401ContentApplication1jsonSchema 
    
}

