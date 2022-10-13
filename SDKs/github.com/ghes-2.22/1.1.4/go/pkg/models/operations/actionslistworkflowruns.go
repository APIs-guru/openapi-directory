package operations

import (
	"openapi/pkg/models/shared"
)

type ActionsListWorkflowRunsPathParams struct {
	Owner      string      `pathParam:"style=simple,explode=false,name=owner"`
	Repo       string      `pathParam:"style=simple,explode=false,name=repo"`
	WorkflowID interface{} `pathParam:"style=simple,explode=false,name=workflow_id"`
}

type ActionsListWorkflowRunsQueryParams struct {
	Actor   *string                       `queryParam:"style=form,explode=true,name=actor"`
	Branch  *string                       `queryParam:"style=form,explode=true,name=branch"`
	Event   *string                       `queryParam:"style=form,explode=true,name=event"`
	Page    *int64                        `queryParam:"style=form,explode=true,name=page"`
	PerPage *int64                        `queryParam:"style=form,explode=true,name=per_page"`
	Status  *shared.WorkflowRunStatusEnum `queryParam:"style=form,explode=true,name=status"`
}

type ActionsListWorkflowRunsRequest struct {
	PathParams  ActionsListWorkflowRunsPathParams
	QueryParams ActionsListWorkflowRunsQueryParams
}

type ActionsListWorkflowRuns200ApplicationJSON struct {
	TotalCount   int64                `json:"total_count"`
	WorkflowRuns []shared.WorkflowRun `json:"workflow_runs"`
}

type ActionsListWorkflowRunsResponse struct {
	ContentType                                     string
	Headers                                         map[string][]string
	StatusCode                                      int64
	ActionsListWorkflowRuns200ApplicationJSONObject *ActionsListWorkflowRuns200ApplicationJSON
}
