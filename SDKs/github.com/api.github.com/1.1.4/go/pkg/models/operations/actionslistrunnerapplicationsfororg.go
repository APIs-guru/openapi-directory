package operations

import (
	"openapi/pkg/models/shared"
)

type ActionsListRunnerApplicationsForOrgPathParams struct {
	Org string `pathParam:"style=simple,explode=false,name=org"`
}

type ActionsListRunnerApplicationsForOrgRequest struct {
	PathParams ActionsListRunnerApplicationsForOrgPathParams
}

type ActionsListRunnerApplicationsForOrgResponse struct {
	ContentType        string
	StatusCode         int64
	RunnerApplications []shared.RunnerApplication
}
