package operations

import (
"openapi/pkg/models/shared")

type FirmwareWeakKeysFirmwareFirmwareHashWeakKeysGetPathParams struct {
    FirmwareHash string `pathParam:"style=simple,explode=false,name=firmware_hash"`
    
}

type FirmwareWeakKeysFirmwareFirmwareHashWeakKeysGetSecurity struct {
    APIKeyHeader shared.SchemeAPIKeyHeader `security:"scheme,type=apiKey,subtype=header"`
    
}

type FirmwareWeakKeysFirmwareFirmwareHashWeakKeysGetRequest struct {
    PathParams FirmwareWeakKeysFirmwareFirmwareHashWeakKeysGetPathParams 
    Security FirmwareWeakKeysFirmwareFirmwareHashWeakKeysGetSecurity 
    
}

type FirmwareWeakKeysFirmwareFirmwareHashWeakKeysGetResponse struct {
    ContentType string 
    CryptoKeys []shared.CryptoKey 
    HTTPValidationError *shared.HTTPValidationError 
    StatusCode int64 
    
}

