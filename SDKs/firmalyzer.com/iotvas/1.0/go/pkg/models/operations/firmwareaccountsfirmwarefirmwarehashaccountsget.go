package operations

import (
	"openapi/pkg/models/shared"
)

type FirmwareAccountsFirmwareFirmwareHashAccountsGetPathParams struct {
	FirmwareHash string `pathParam:"style=simple,explode=false,name=firmware_hash"`
}

type FirmwareAccountsFirmwareFirmwareHashAccountsGetSecurity struct {
	APIKeyHeader shared.SchemeAPIKeyHeader `security:"scheme,type=apiKey,subtype=header"`
}

type FirmwareAccountsFirmwareFirmwareHashAccountsGetRequest struct {
	PathParams FirmwareAccountsFirmwareFirmwareHashAccountsGetPathParams
	Security   FirmwareAccountsFirmwareFirmwareHashAccountsGetSecurity
}

type FirmwareAccountsFirmwareFirmwareHashAccountsGetResponse struct {
	ContentType         string
	DefaultAccounts     []shared.DefaultAccount
	HTTPValidationError *shared.HTTPValidationError
	StatusCode          int64
}
