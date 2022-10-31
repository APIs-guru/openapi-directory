package operations

import (
"openapi/pkg/models/shared")

type UpdateCdnEndpointPathParams struct {
    CdnID string `pathParam:"style=simple,explode=false,name=cdn_id"`
    
}

type UpdateCdnEndpointRequestBody struct {
    CertificateID *string `json:"certificate_id,omitempty"`
    CustomDomain *string `json:"custom_domain,omitempty"`
    TTL *int64 `json:"ttl,omitempty"`
    
}

type UpdateCdnEndpointRequest struct {
    PathParams UpdateCdnEndpointPathParams 
    Request UpdateCdnEndpointRequestBody `request:"mediaType=application/json"`
    
}

type UpdateCdnEndpoint401ApplicationJSON struct {
    ID string `json:"id"`
    Message string `json:"message"`
    RequestID *string `json:"request_id,omitempty"`
    
}

type UpdateCdnEndpointResponse struct {
    ContentType string 
    Headers map[string][]string 
    StatusCode int64 
    UpdateCdnEndpoint202ApplicationJSONAny *interface{} 
    UpdateCdnEndpoint401ApplicationJSONObject *UpdateCdnEndpoint401ApplicationJSON 
    Onev211ClicksGetResponses401ContentApplication1jsonSchema *shared.Onev211ClicksGetResponses401ContentApplication1jsonSchema 
    
}

