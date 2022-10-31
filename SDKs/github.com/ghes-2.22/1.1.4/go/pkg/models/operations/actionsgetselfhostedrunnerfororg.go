package operations

import (
	"openapi/pkg/models/shared"
)

type ActionsGetSelfHostedRunnerForOrgPathParams struct {
	Org      string `pathParam:"style=simple,explode=false,name=org"`
	RunnerID int64  `pathParam:"style=simple,explode=false,name=runner_id"`
}

type ActionsGetSelfHostedRunnerForOrgRequest struct {
	PathParams ActionsGetSelfHostedRunnerForOrgPathParams
}

type ActionsGetSelfHostedRunnerForOrgResponse struct {
	ContentType    string
	StatusCode     int64
	RunnerNoLabels *shared.RunnerNoLabels
}
