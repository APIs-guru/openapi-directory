package operations

import (
	"openapi/pkg/models/shared"
)

type ActionsGetWorkflowRunUsagePathParams struct {
	Owner string `pathParam:"style=simple,explode=false,name=owner"`
	Repo  string `pathParam:"style=simple,explode=false,name=repo"`
	RunID int64  `pathParam:"style=simple,explode=false,name=run_id"`
}

type ActionsGetWorkflowRunUsageRequest struct {
	PathParams ActionsGetWorkflowRunUsagePathParams
}

type ActionsGetWorkflowRunUsageResponse struct {
	ContentType      string
	StatusCode       int64
	WorkflowRunUsage *shared.WorkflowRunUsage
}
