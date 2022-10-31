package operations

import (
"openapi/pkg/models/shared")

type GetCertificatePathParams struct {
    CertificateID string `pathParam:"style=simple,explode=false,name=certificate_id"`
    
}

type GetCertificateRequest struct {
    PathParams GetCertificatePathParams 
    
}

type GetCertificate200ApplicationJSON struct {
    Certificate *shared.Onev21certificatesGetResponses200ContentApplication1jsonSchemaAllOf0PropertiesCertificatesItems `json:"certificate,omitempty"`
    
}

type GetCertificate401ApplicationJSON struct {
    ID string `json:"id"`
    Message string `json:"message"`
    RequestID *string `json:"request_id,omitempty"`
    
}

type GetCertificateResponse struct {
    ContentType string 
    Headers map[string][]string 
    StatusCode int64 
    GetCertificate200ApplicationJSONObject *GetCertificate200ApplicationJSON 
    GetCertificate401ApplicationJSONObject *GetCertificate401ApplicationJSON 
    Onev211ClicksGetResponses401ContentApplication1jsonSchema *shared.Onev211ClicksGetResponses401ContentApplication1jsonSchema 
    
}

