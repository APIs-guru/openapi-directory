package operations

import (
"openapi/pkg/models/shared")

type UpdateEvictionPolicyPathParams struct {
    DatabaseClusterUUID string `pathParam:"style=simple,explode=false,name=database_cluster_uuid"`
    
}

type UpdateEvictionPolicyRequest struct {
    PathParams UpdateEvictionPolicyPathParams 
    Request shared.Onev21databases1Percent7BdatabaseClusterUUIDPercent7D1evictionPolicyGetResponses200ContentApplication1jsonSchema `request:"mediaType=application/json"`
    
}

type UpdateEvictionPolicy401ApplicationJSON struct {
    ID string `json:"id"`
    Message string `json:"message"`
    RequestID *string `json:"request_id,omitempty"`
    
}

type UpdateEvictionPolicyResponse struct {
    ContentType string 
    Headers map[string][]string 
    StatusCode int64 
    UpdateEvictionPolicy401ApplicationJSONObject *UpdateEvictionPolicy401ApplicationJSON 
    Onev211ClicksGetResponses401ContentApplication1jsonSchema *shared.Onev211ClicksGetResponses401ContentApplication1jsonSchema 
    
}

