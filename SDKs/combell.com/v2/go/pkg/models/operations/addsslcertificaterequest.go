package operations

import (
"openapi/pkg/models/shared")

type AddSslCertificateRequestRequest struct {
    Request *shared.CreateSslCertificateRequest `request:"mediaType=application/json"`
    
}

type AddSslCertificateRequestResponse struct {
    ContentType string 
    Headers map[string][]string 
    StatusCode int64 
    
}

