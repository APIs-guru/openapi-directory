package operations

import (
"openapi/pkg/models/shared")

type AddConnectionPoolPathParams struct {
    DatabaseClusterUUID string `pathParam:"style=simple,explode=false,name=database_cluster_uuid"`
    
}

type AddConnectionPoolRequest struct {
    PathParams AddConnectionPoolPathParams 
    Request shared.Onev21databases1Percent7BdatabaseClusterUUIDPercent7D1poolsGetResponses200ContentApplication1jsonSchemaPropertiesPoolsItems `request:"mediaType=application/json"`
    
}

type AddConnectionPool201ApplicationJSON struct {
    Pool shared.Onev21databases1Percent7BdatabaseClusterUUIDPercent7D1poolsGetResponses200ContentApplication1jsonSchemaPropertiesPoolsItems `json:"pool"`
    
}

type AddConnectionPool401ApplicationJSON struct {
    ID string `json:"id"`
    Message string `json:"message"`
    RequestID *string `json:"request_id,omitempty"`
    
}

type AddConnectionPoolResponse struct {
    ContentType string 
    Headers map[string][]string 
    StatusCode int64 
    AddConnectionPool201ApplicationJSONObject *AddConnectionPool201ApplicationJSON 
    AddConnectionPool401ApplicationJSONObject *AddConnectionPool401ApplicationJSON 
    Onev211ClicksGetResponses401ContentApplication1jsonSchema *shared.Onev211ClicksGetResponses401ContentApplication1jsonSchema 
    
}

