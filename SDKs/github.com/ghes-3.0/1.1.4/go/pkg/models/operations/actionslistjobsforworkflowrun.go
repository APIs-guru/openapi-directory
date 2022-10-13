package operations

import (
	"openapi/pkg/models/shared"
)

type ActionsListJobsForWorkflowRunPathParams struct {
	Owner string `pathParam:"style=simple,explode=false,name=owner"`
	Repo  string `pathParam:"style=simple,explode=false,name=repo"`
	RunID int64  `pathParam:"style=simple,explode=false,name=run_id"`
}

type ActionsListJobsForWorkflowRunFilterEnum string

const (
	ActionsListJobsForWorkflowRunFilterEnumLatest ActionsListJobsForWorkflowRunFilterEnum = "latest"
	ActionsListJobsForWorkflowRunFilterEnumAll    ActionsListJobsForWorkflowRunFilterEnum = "all"
)

type ActionsListJobsForWorkflowRunQueryParams struct {
	Filter  *ActionsListJobsForWorkflowRunFilterEnum `queryParam:"style=form,explode=true,name=filter"`
	Page    *int64                                   `queryParam:"style=form,explode=true,name=page"`
	PerPage *int64                                   `queryParam:"style=form,explode=true,name=per_page"`
}

type ActionsListJobsForWorkflowRunRequest struct {
	PathParams  ActionsListJobsForWorkflowRunPathParams
	QueryParams ActionsListJobsForWorkflowRunQueryParams
}

type ActionsListJobsForWorkflowRun200ApplicationJSON struct {
	Jobs       []shared.Job `json:"jobs"`
	TotalCount int64        `json:"total_count"`
}

type ActionsListJobsForWorkflowRunResponse struct {
	ContentType                                           string
	Headers                                               map[string][]string
	StatusCode                                            int64
	ActionsListJobsForWorkflowRun200ApplicationJSONObject *ActionsListJobsForWorkflowRun200ApplicationJSON
}
