package operations

import (
"openapi/pkg/models/shared")

type GetDockerCredentialsQueryParams struct {
    ExpirySeconds *int64 `queryParam:"style=form,explode=true,name=expiry_seconds"`
    ReadWrite *bool `queryParam:"style=form,explode=true,name=read_write"`
    
}

type GetDockerCredentialsRequest struct {
    QueryParams GetDockerCredentialsQueryParams 
    
}

type GetDockerCredentials200ApplicationJSONAuthsRegistryDigitaloceanCom struct {
    Auth *string `json:"auth,omitempty"`
    
}

type GetDockerCredentials200ApplicationJSONAuths struct {
    RegistryDigitaloceanCom *GetDockerCredentials200ApplicationJSONAuthsRegistryDigitaloceanCom `json:"registry.digitalocean.com,omitempty"`
    
}

type GetDockerCredentials200ApplicationJSON struct {
    Auths *GetDockerCredentials200ApplicationJSONAuths `json:"auths,omitempty"`
    
}

type GetDockerCredentials401ApplicationJSON struct {
    ID string `json:"id"`
    Message string `json:"message"`
    RequestID *string `json:"request_id,omitempty"`
    
}

type GetDockerCredentialsResponse struct {
    ContentType string 
    Headers map[string][]string 
    StatusCode int64 
    GetDockerCredentials200ApplicationJSONObject *GetDockerCredentials200ApplicationJSON 
    GetDockerCredentials401ApplicationJSONObject *GetDockerCredentials401ApplicationJSON 
    Onev211ClicksGetResponses401ContentApplication1jsonSchema *shared.Onev211ClicksGetResponses401ContentApplication1jsonSchema 
    
}

