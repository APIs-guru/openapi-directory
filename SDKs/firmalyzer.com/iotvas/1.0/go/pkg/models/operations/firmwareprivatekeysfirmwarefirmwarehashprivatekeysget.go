package operations

import (
	"openapi/pkg/models/shared"
)

type FirmwarePrivateKeysFirmwareFirmwareHashPrivateKeysGetPathParams struct {
	FirmwareHash string `pathParam:"style=simple,explode=false,name=firmware_hash"`
}

type FirmwarePrivateKeysFirmwareFirmwareHashPrivateKeysGetSecurity struct {
	APIKeyHeader shared.SchemeAPIKeyHeader `security:"scheme,type=apiKey,subtype=header"`
}

type FirmwarePrivateKeysFirmwareFirmwareHashPrivateKeysGetRequest struct {
	PathParams FirmwarePrivateKeysFirmwareFirmwareHashPrivateKeysGetPathParams
	Security   FirmwarePrivateKeysFirmwareFirmwareHashPrivateKeysGetSecurity
}

type FirmwarePrivateKeysFirmwareFirmwareHashPrivateKeysGetResponse struct {
	ContentType         string
	CryptoKeys          []shared.CryptoKey
	HTTPValidationError *shared.HTTPValidationError
	StatusCode          int64
}
