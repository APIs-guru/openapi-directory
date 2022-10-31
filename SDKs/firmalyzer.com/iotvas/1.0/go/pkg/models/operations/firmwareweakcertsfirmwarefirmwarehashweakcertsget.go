package operations

import (
	"openapi/pkg/models/shared"
)

type FirmwareWeakCertsFirmwareFirmwareHashWeakCertsGetPathParams struct {
	FirmwareHash string `pathParam:"style=simple,explode=false,name=firmware_hash"`
}

type FirmwareWeakCertsFirmwareFirmwareHashWeakCertsGetSecurity struct {
	APIKeyHeader shared.SchemeAPIKeyHeader `security:"scheme,type=apiKey,subtype=header"`
}

type FirmwareWeakCertsFirmwareFirmwareHashWeakCertsGetRequest struct {
	PathParams FirmwareWeakCertsFirmwareFirmwareHashWeakCertsGetPathParams
	Security   FirmwareWeakCertsFirmwareFirmwareHashWeakCertsGetSecurity
}

type FirmwareWeakCertsFirmwareFirmwareHashWeakCertsGetResponse struct {
	ContentType         string
	HTTPValidationError *shared.HTTPValidationError
	StatusCode          int64
	WeakCerts           []shared.WeakCert
}
