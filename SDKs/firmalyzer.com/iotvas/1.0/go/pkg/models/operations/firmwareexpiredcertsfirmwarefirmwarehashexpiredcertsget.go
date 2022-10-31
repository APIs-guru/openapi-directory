package operations

import (
"openapi/pkg/models/shared")

type FirmwareExpiredCertsFirmwareFirmwareHashExpiredCertsGetPathParams struct {
    FirmwareHash string `pathParam:"style=simple,explode=false,name=firmware_hash"`
    
}

type FirmwareExpiredCertsFirmwareFirmwareHashExpiredCertsGetSecurity struct {
    APIKeyHeader shared.SchemeAPIKeyHeader `security:"scheme,type=apiKey,subtype=header"`
    
}

type FirmwareExpiredCertsFirmwareFirmwareHashExpiredCertsGetRequest struct {
    PathParams FirmwareExpiredCertsFirmwareFirmwareHashExpiredCertsGetPathParams 
    Security FirmwareExpiredCertsFirmwareFirmwareHashExpiredCertsGetSecurity 
    
}

type FirmwareExpiredCertsFirmwareFirmwareHashExpiredCertsGetResponse struct {
    ContentType string 
    ExpiredCerts []shared.ExpiredCert 
    HTTPValidationError *shared.HTTPValidationError 
    StatusCode int64 
    
}

