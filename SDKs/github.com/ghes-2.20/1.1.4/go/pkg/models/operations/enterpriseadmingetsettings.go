package operations

import (
	"openapi/pkg/models/shared"
)

type EnterpriseAdminGetSettingsResponse struct {
	ContentType        string
	StatusCode         int64
	EnterpriseSettings *shared.EnterpriseSettings
}
