package operations

import (
"openapi/pkg/models/shared")

type UpdateSQLModePathParams struct {
    DatabaseClusterUUID string `pathParam:"style=simple,explode=false,name=database_cluster_uuid"`
    
}

type UpdateSQLModeRequest struct {
    PathParams UpdateSQLModePathParams 
    Request shared.Onev21databases1Percent7BdatabaseClusterUUIDPercent7D1sqlModeGetResponses200ContentApplication1jsonSchema `request:"mediaType=application/json"`
    
}

type UpdateSQLMode401ApplicationJSON struct {
    ID string `json:"id"`
    Message string `json:"message"`
    RequestID *string `json:"request_id,omitempty"`
    
}

type UpdateSQLModeResponse struct {
    ContentType string 
    Headers map[string][]string 
    StatusCode int64 
    UpdateSQLMode401ApplicationJSONObject *UpdateSQLMode401ApplicationJSON 
    Onev211ClicksGetResponses401ContentApplication1jsonSchema *shared.Onev211ClicksGetResponses401ContentApplication1jsonSchema 
    
}

