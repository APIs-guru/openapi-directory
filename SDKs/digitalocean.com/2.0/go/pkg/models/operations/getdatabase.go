package operations

import (
"openapi/pkg/models/shared")

type GetDatabasePathParams struct {
    DatabaseClusterUUID string `pathParam:"style=simple,explode=false,name=database_cluster_uuid"`
    DatabaseName string `pathParam:"style=simple,explode=false,name=database_name"`
    
}

type GetDatabaseRequest struct {
    PathParams GetDatabasePathParams 
    
}

type GetDatabase200ApplicationJSON struct {
    Db shared.Onev21databases1Percent7BdatabaseClusterUUIDPercent7D1dbsGetResponses200ContentApplication1jsonSchemaPropertiesDbsItems `json:"db"`
    
}

type GetDatabase401ApplicationJSON struct {
    ID string `json:"id"`
    Message string `json:"message"`
    RequestID *string `json:"request_id,omitempty"`
    
}

type GetDatabaseResponse struct {
    ContentType string 
    Headers map[string][]string 
    StatusCode int64 
    GetDatabase200ApplicationJSONObject *GetDatabase200ApplicationJSON 
    GetDatabase401ApplicationJSONObject *GetDatabase401ApplicationJSON 
    Onev211ClicksGetResponses401ContentApplication1jsonSchema *shared.Onev211ClicksGetResponses401ContentApplication1jsonSchema 
    
}

