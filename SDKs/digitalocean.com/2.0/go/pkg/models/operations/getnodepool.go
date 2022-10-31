package operations

import (
"openapi/pkg/models/shared")

type GetNodePoolPathParams struct {
    ClusterID string `pathParam:"style=simple,explode=false,name=cluster_id"`
    NodePoolID string `pathParam:"style=simple,explode=false,name=node_pool_id"`
    
}

type GetNodePoolRequest struct {
    PathParams GetNodePoolPathParams 
    
}

type GetNodePool401ApplicationJSON struct {
    ID string `json:"id"`
    Message string `json:"message"`
    RequestID *string `json:"request_id,omitempty"`
    
}

type GetNodePoolResponse struct {
    ContentType string 
    Headers map[string][]string 
    StatusCode int64 
    GetNodePool200ApplicationJSONAny *interface{} 
    GetNodePool401ApplicationJSONObject *GetNodePool401ApplicationJSON 
    Onev211ClicksGetResponses401ContentApplication1jsonSchema *shared.Onev211ClicksGetResponses401ContentApplication1jsonSchema 
    
}

