package operations

import (
"openapi/pkg/models/shared")

type GetKubeconfigPathParams struct {
    ClusterID string `pathParam:"style=simple,explode=false,name=cluster_id"`
    
}

type GetKubeconfigQueryParams struct {
    ExpirySeconds *int64 `queryParam:"style=form,explode=true,name=expiry_seconds"`
    
}

type GetKubeconfigRequest struct {
    PathParams GetKubeconfigPathParams 
    QueryParams GetKubeconfigQueryParams 
    
}

type GetKubeconfig401ApplicationJSON struct {
    ID string `json:"id"`
    Message string `json:"message"`
    RequestID *string `json:"request_id,omitempty"`
    
}

type GetKubeconfigResponse struct {
    ContentType string 
    Headers map[string][]string 
    StatusCode int64 
    GetKubeconfig200ApplicationYamlString *string 
    GetKubeconfig401ApplicationJSONObject *GetKubeconfig401ApplicationJSON 
    Onev211ClicksGetResponses401ContentApplication1jsonSchema *shared.Onev211ClicksGetResponses401ContentApplication1jsonSchema 
    
}

