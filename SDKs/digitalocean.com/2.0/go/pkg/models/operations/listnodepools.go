package operations

import (
"openapi/pkg/models/shared")

type ListNodePoolsPathParams struct {
    ClusterID string `pathParam:"style=simple,explode=false,name=cluster_id"`
    
}

type ListNodePoolsRequest struct {
    PathParams ListNodePoolsPathParams 
    
}

type ListNodePools401ApplicationJSON struct {
    ID string `json:"id"`
    Message string `json:"message"`
    RequestID *string `json:"request_id,omitempty"`
    
}

type ListNodePoolsResponse struct {
    ContentType string 
    Headers map[string][]string 
    StatusCode int64 
    ListNodePools200ApplicationJSONAny *interface{} 
    ListNodePools401ApplicationJSONObject *ListNodePools401ApplicationJSON 
    Onev211ClicksGetResponses401ContentApplication1jsonSchema *shared.Onev211ClicksGetResponses401ContentApplication1jsonSchema 
    
}

