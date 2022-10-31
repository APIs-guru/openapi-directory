package operations

import (
"openapi/pkg/models/shared")

type GetClusterUserPathParams struct {
    ClusterID string `pathParam:"style=simple,explode=false,name=cluster_id"`
    
}

type GetClusterUserRequest struct {
    PathParams GetClusterUserPathParams 
    
}

type GetClusterUser200ApplicationJSONKubernetesClusterUser struct {
    Groups []string `json:"groups,omitempty"`
    Username *string `json:"username,omitempty"`
    
}

type GetClusterUser200ApplicationJSON struct {
    KubernetesClusterUser *GetClusterUser200ApplicationJSONKubernetesClusterUser `json:"kubernetes_cluster_user,omitempty"`
    
}

type GetClusterUser401ApplicationJSON struct {
    ID string `json:"id"`
    Message string `json:"message"`
    RequestID *string `json:"request_id,omitempty"`
    
}

type GetClusterUserResponse struct {
    ContentType string 
    Headers map[string][]string 
    StatusCode int64 
    GetClusterUser200ApplicationJSONObject *GetClusterUser200ApplicationJSON 
    GetClusterUser401ApplicationJSONObject *GetClusterUser401ApplicationJSON 
    Onev211ClicksGetResponses401ContentApplication1jsonSchema *shared.Onev211ClicksGetResponses401ContentApplication1jsonSchema 
    
}

