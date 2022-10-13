package operations

import (
	"openapi/pkg/models/shared"
)

type ActionsGetWorkflowRunPathParams struct {
	Owner string `pathParam:"style=simple,explode=false,name=owner"`
	Repo  string `pathParam:"style=simple,explode=false,name=repo"`
	RunID int64  `pathParam:"style=simple,explode=false,name=run_id"`
}

type ActionsGetWorkflowRunRequest struct {
	PathParams ActionsGetWorkflowRunPathParams
}

type ActionsGetWorkflowRunResponse struct {
	ContentType string
	StatusCode  int64
	WorkflowRun *shared.WorkflowRun
}
