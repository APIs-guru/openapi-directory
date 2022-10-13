package operations

import (
	"openapi/pkg/models/shared"
)

type EnterpriseAdminGetMaintenanceStatusResponse struct {
	ContentType       string
	StatusCode        int64
	MaintenanceStatus *shared.MaintenanceStatus
}
