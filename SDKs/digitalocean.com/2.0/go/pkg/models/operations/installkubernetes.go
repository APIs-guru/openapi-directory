package operations

import (
"openapi/pkg/models/shared")

type InstallKubernetesRequestBody struct {
    AddonSlugs []string `json:"addon_slugs"`
    ClusterUUID string `json:"cluster_uuid"`
    
}

type InstallKubernetesRequest struct {
    Request InstallKubernetesRequestBody `request:"mediaType=application/json"`
    
}

type InstallKubernetes200ApplicationJSON struct {
    Message *string `json:"message,omitempty"`
    
}

type InstallKubernetes401ApplicationJSON struct {
    ID string `json:"id"`
    Message string `json:"message"`
    RequestID *string `json:"request_id,omitempty"`
    
}

type InstallKubernetesResponse struct {
    ContentType string 
    Headers map[string][]string 
    StatusCode int64 
    InstallKubernetes200ApplicationJSONObject *InstallKubernetes200ApplicationJSON 
    InstallKubernetes401ApplicationJSONObject *InstallKubernetes401ApplicationJSON 
    Onev211ClicksGetResponses401ContentApplication1jsonSchema *shared.Onev211ClicksGetResponses401ContentApplication1jsonSchema 
    
}

