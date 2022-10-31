package operations

import (
"openapi/pkg/models/shared")

type GetSSHKeyPathParams struct {
    SSHKeyIdentifier interface{} `pathParam:"style=simple,explode=false,name=ssh_key_identifier"`
    
}

type GetSSHKeyRequest struct {
    PathParams GetSSHKeyPathParams 
    
}

type GetSSHKey401ApplicationJSON struct {
    ID string `json:"id"`
    Message string `json:"message"`
    RequestID *string `json:"request_id,omitempty"`
    
}

type GetSSHKeyResponse struct {
    ContentType string 
    Headers map[string][]string 
    StatusCode int64 
    GetSSHKey200ApplicationJSONAny *interface{} 
    GetSSHKey401ApplicationJSONObject *GetSSHKey401ApplicationJSON 
    Onev211ClicksGetResponses401ContentApplication1jsonSchema *shared.Onev211ClicksGetResponses401ContentApplication1jsonSchema 
    
}

