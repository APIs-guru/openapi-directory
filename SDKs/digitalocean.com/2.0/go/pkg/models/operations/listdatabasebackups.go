package operations

import (
"time"
"openapi/pkg/models/shared")

type ListDatabaseBackupsPathParams struct {
    DatabaseClusterUUID string `pathParam:"style=simple,explode=false,name=database_cluster_uuid"`
    
}

type ListDatabaseBackupsRequest struct {
    PathParams ListDatabaseBackupsPathParams 
    
}

type ListDatabaseBackups200ApplicationJSONBackups struct {
    CreatedAt time.Time `json:"created_at"`
    SizeGigabytes float64 `json:"size_gigabytes"`
    
}

type ListDatabaseBackups200ApplicationJSON struct {
    Backups []ListDatabaseBackups200ApplicationJSONBackups `json:"backups"`
    
}

type ListDatabaseBackups401ApplicationJSON struct {
    ID string `json:"id"`
    Message string `json:"message"`
    RequestID *string `json:"request_id,omitempty"`
    
}

type ListDatabaseBackupsResponse struct {
    ContentType string 
    Headers map[string][]string 
    StatusCode int64 
    ListDatabaseBackups200ApplicationJSONObject *ListDatabaseBackups200ApplicationJSON 
    ListDatabaseBackups401ApplicationJSONObject *ListDatabaseBackups401ApplicationJSON 
    Onev211ClicksGetResponses401ContentApplication1jsonSchema *shared.Onev211ClicksGetResponses401ContentApplication1jsonSchema 
    
}

