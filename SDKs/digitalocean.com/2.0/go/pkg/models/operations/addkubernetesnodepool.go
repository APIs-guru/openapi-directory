package operations

import (
"openapi/pkg/models/shared")

type AddKubernetesNodePoolPathParams struct {
    ClusterID string `pathParam:"style=simple,explode=false,name=cluster_id"`
    
}

type AddKubernetesNodePoolRequest struct {
    PathParams AddKubernetesNodePoolPathParams 
    Request shared.Onev21kubernetes1clustersGetResponses200ContentApplication1jsonSchemaAllOf0PropertiesKubernetesClustersItemsPropertiesNodePoolsItems `request:"mediaType=application/json"`
    
}

type AddKubernetesNodePool401ApplicationJSON struct {
    ID string `json:"id"`
    Message string `json:"message"`
    RequestID *string `json:"request_id,omitempty"`
    
}

type AddKubernetesNodePoolResponse struct {
    ContentType string 
    Headers map[string][]string 
    StatusCode int64 
    AddKubernetesNodePool201ApplicationJSONAny *interface{} 
    AddKubernetesNodePool401ApplicationJSONObject *AddKubernetesNodePool401ApplicationJSON 
    Onev211ClicksGetResponses401ContentApplication1jsonSchema *shared.Onev211ClicksGetResponses401ContentApplication1jsonSchema 
    
}

