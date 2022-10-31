package operations

import (
"time"
"openapi/pkg/models/shared")

type GetCredentialsPathParams struct {
    ClusterID string `pathParam:"style=simple,explode=false,name=cluster_id"`
    
}

type GetCredentialsQueryParams struct {
    ExpirySeconds *int64 `queryParam:"style=form,explode=true,name=expiry_seconds"`
    
}

type GetCredentialsRequest struct {
    PathParams GetCredentialsPathParams 
    QueryParams GetCredentialsQueryParams 
    
}

type GetCredentials200ApplicationJSON struct {
    CertificateAuthorityData *string `json:"certificate_authority_data,omitempty"`
    ClientCertificateData *string `json:"client_certificate_data,omitempty"`
    ClientKeyData *string `json:"client_key_data,omitempty"`
    ExpiresAt *time.Time `json:"expires_at,omitempty"`
    Server *string `json:"server,omitempty"`
    Token *string `json:"token,omitempty"`
    
}

type GetCredentials401ApplicationJSON struct {
    ID string `json:"id"`
    Message string `json:"message"`
    RequestID *string `json:"request_id,omitempty"`
    
}

type GetCredentialsResponse struct {
    ContentType string 
    Headers map[string][]string 
    StatusCode int64 
    GetCredentials200ApplicationJSONObject *GetCredentials200ApplicationJSON 
    GetCredentials401ApplicationJSONObject *GetCredentials401ApplicationJSON 
    Onev211ClicksGetResponses401ContentApplication1jsonSchema *shared.Onev211ClicksGetResponses401ContentApplication1jsonSchema 
    
}

