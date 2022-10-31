package operations

import (
"openapi/pkg/models/shared")

type GetSslCertificatePathParams struct {
    Sha1Fingerprint string `pathParam:"style=simple,explode=false,name=sha1Fingerprint"`
    
}

type GetSslCertificateQueryParams struct {
    Sha1Fingerprint string `queryParam:"style=form,explode=true,name=sha1_fingerprint"`
    
}

type GetSslCertificateRequest struct {
    PathParams GetSslCertificatePathParams 
    QueryParams GetSslCertificateQueryParams 
    
}

type GetSslCertificateResponse struct {
    ContentType string 
    SslCertificateDetail *shared.SslCertificateDetail 
    StatusCode int64 
    
}

