package operations

import (
	"openapi/pkg/models/shared"
)

type EnterpriseAdminEnableOrDisableMaintenanceModeRequestBody struct {
	Maintenance string `json:"maintenance"`
}

type EnterpriseAdminEnableOrDisableMaintenanceModeRequest struct {
	Request *EnterpriseAdminEnableOrDisableMaintenanceModeRequestBody `request:"mediaType=application/json"`
}

type EnterpriseAdminEnableOrDisableMaintenanceModeResponse struct {
	ContentType       string
	StatusCode        int64
	MaintenanceStatus *shared.MaintenanceStatus
}
