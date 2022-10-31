package operations

import (
"openapi/pkg/models/shared")

type CreateCdnEndpointRequest struct {
    Request shared.Onev21cdn1endpointsGetResponses200ContentApplication1jsonSchemaAllOf0PropertiesEndpointsItems `request:"mediaType=application/json"`
    
}

type CreateCdnEndpoint401ApplicationJSON struct {
    ID string `json:"id"`
    Message string `json:"message"`
    RequestID *string `json:"request_id,omitempty"`
    
}

type CreateCdnEndpointResponse struct {
    ContentType string 
    Headers map[string][]string 
    StatusCode int64 
    CreateCdnEndpoint201ApplicationJSONAny *interface{} 
    CreateCdnEndpoint401ApplicationJSONObject *CreateCdnEndpoint401ApplicationJSON 
    Onev211ClicksGetResponses401ContentApplication1jsonSchema *shared.Onev211ClicksGetResponses401ContentApplication1jsonSchema 
    
}

