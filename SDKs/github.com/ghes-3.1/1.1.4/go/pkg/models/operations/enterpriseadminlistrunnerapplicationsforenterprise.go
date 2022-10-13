package operations

import (
	"openapi/pkg/models/shared"
)

type EnterpriseAdminListRunnerApplicationsForEnterprisePathParams struct {
	Enterprise string `pathParam:"style=simple,explode=false,name=enterprise"`
}

type EnterpriseAdminListRunnerApplicationsForEnterpriseRequest struct {
	PathParams EnterpriseAdminListRunnerApplicationsForEnterprisePathParams
}

type EnterpriseAdminListRunnerApplicationsForEnterpriseResponse struct {
	ContentType        string
	StatusCode         int64
	RunnerApplications []shared.RunnerApplication
}
