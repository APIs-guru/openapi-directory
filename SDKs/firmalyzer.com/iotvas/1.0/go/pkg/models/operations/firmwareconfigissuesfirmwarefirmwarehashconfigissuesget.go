package operations

import (
	"openapi/pkg/models/shared"
)

type FirmwareConfigIssuesFirmwareFirmwareHashConfigIssuesGetPathParams struct {
	FirmwareHash string `pathParam:"style=simple,explode=false,name=firmware_hash"`
}

type FirmwareConfigIssuesFirmwareFirmwareHashConfigIssuesGetSecurity struct {
	APIKeyHeader shared.SchemeAPIKeyHeader `security:"scheme,type=apiKey,subtype=header"`
}

type FirmwareConfigIssuesFirmwareFirmwareHashConfigIssuesGetRequest struct {
	PathParams FirmwareConfigIssuesFirmwareFirmwareHashConfigIssuesGetPathParams
	Security   FirmwareConfigIssuesFirmwareFirmwareHashConfigIssuesGetSecurity
}

type FirmwareConfigIssuesFirmwareFirmwareHashConfigIssuesGetResponse struct {
	ConfigIssues        []shared.ConfigIssue
	ContentType         string
	HTTPValidationError *shared.HTTPValidationError
	StatusCode          int64
}
