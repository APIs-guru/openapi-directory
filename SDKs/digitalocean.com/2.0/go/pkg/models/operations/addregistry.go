package operations

import (
"openapi/pkg/models/shared")

type AddRegistryRequestBody struct {
    ClusterUuids []string `json:"cluster_uuids,omitempty"`
    
}

type AddRegistryRequest struct {
    Request *AddRegistryRequestBody `request:"mediaType=application/json"`
    
}

type AddRegistry401ApplicationJSON struct {
    ID string `json:"id"`
    Message string `json:"message"`
    RequestID *string `json:"request_id,omitempty"`
    
}

type AddRegistryResponse struct {
    ContentType string 
    Headers map[string][]string 
    StatusCode int64 
    AddRegistry401ApplicationJSONObject *AddRegistry401ApplicationJSON 
    Onev211ClicksGetResponses401ContentApplication1jsonSchema *shared.Onev211ClicksGetResponses401ContentApplication1jsonSchema 
    
}

