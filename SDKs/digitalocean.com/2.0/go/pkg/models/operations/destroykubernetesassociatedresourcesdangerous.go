package operations

import (
"openapi/pkg/models/shared")

type DestroyKubernetesAssociatedResourcesDangerousPathParams struct {
    ClusterID string `pathParam:"style=simple,explode=false,name=cluster_id"`
    
}

type DestroyKubernetesAssociatedResourcesDangerousRequest struct {
    PathParams DestroyKubernetesAssociatedResourcesDangerousPathParams 
    
}

type DestroyKubernetesAssociatedResourcesDangerous401ApplicationJSON struct {
    ID string `json:"id"`
    Message string `json:"message"`
    RequestID *string `json:"request_id,omitempty"`
    
}

type DestroyKubernetesAssociatedResourcesDangerousResponse struct {
    ContentType string 
    Headers map[string][]string 
    StatusCode int64 
    DestroyKubernetesAssociatedResourcesDangerous401ApplicationJSONObject *DestroyKubernetesAssociatedResourcesDangerous401ApplicationJSON 
    Onev211ClicksGetResponses401ContentApplication1jsonSchema *shared.Onev211ClicksGetResponses401ContentApplication1jsonSchema 
    
}

