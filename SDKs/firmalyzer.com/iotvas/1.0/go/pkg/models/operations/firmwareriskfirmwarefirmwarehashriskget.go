package operations

import (
	"openapi/pkg/models/shared"
)

type FirmwareRiskFirmwareFirmwareHashRiskGetPathParams struct {
	FirmwareHash string `pathParam:"style=simple,explode=false,name=firmware_hash"`
}

type FirmwareRiskFirmwareFirmwareHashRiskGetSecurity struct {
	APIKeyHeader shared.SchemeAPIKeyHeader `security:"scheme,type=apiKey,subtype=header"`
}

type FirmwareRiskFirmwareFirmwareHashRiskGetRequest struct {
	PathParams FirmwareRiskFirmwareFirmwareHashRiskGetPathParams
	Security   FirmwareRiskFirmwareFirmwareHashRiskGetSecurity
}

type FirmwareRiskFirmwareFirmwareHashRiskGetResponse struct {
	ContentType         string
	FirmwareRisk        *shared.FirmwareRisk
	HTTPValidationError *shared.HTTPValidationError
	StatusCode          int64
}
