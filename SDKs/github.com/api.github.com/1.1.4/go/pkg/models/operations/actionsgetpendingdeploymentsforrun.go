package operations

import (
	"openapi/pkg/models/shared"
)

type ActionsGetPendingDeploymentsForRunPathParams struct {
	Owner string `pathParam:"style=simple,explode=false,name=owner"`
	Repo  string `pathParam:"style=simple,explode=false,name=repo"`
	RunID int64  `pathParam:"style=simple,explode=false,name=run_id"`
}

type ActionsGetPendingDeploymentsForRunRequest struct {
	PathParams ActionsGetPendingDeploymentsForRunPathParams
}

type ActionsGetPendingDeploymentsForRunResponse struct {
	ContentType        string
	StatusCode         int64
	PendingDeployments []shared.PendingDeployment
}
