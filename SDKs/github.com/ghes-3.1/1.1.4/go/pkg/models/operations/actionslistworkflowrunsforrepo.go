package operations

import (
"openapi/pkg/models/shared")

type ActionsListWorkflowRunsForRepoPathParams struct {
    Owner string `pathParam:"style=simple,explode=false,name=owner"`
    Repo string `pathParam:"style=simple,explode=false,name=repo"`
    
}

type ActionsListWorkflowRunsForRepoQueryParams struct {
    Actor *string `queryParam:"style=form,explode=true,name=actor"`
    Branch *string `queryParam:"style=form,explode=true,name=branch"`
    Event *string `queryParam:"style=form,explode=true,name=event"`
    Page *int64 `queryParam:"style=form,explode=true,name=page"`
    PerPage *int64 `queryParam:"style=form,explode=true,name=per_page"`
    Status *shared.WorkflowRunStatusEnum `queryParam:"style=form,explode=true,name=status"`
    
}

type ActionsListWorkflowRunsForRepoRequest struct {
    PathParams ActionsListWorkflowRunsForRepoPathParams 
    QueryParams ActionsListWorkflowRunsForRepoQueryParams 
    
}

type ActionsListWorkflowRunsForRepo200ApplicationJSON struct {
    TotalCount int64 `json:"total_count"`
    WorkflowRuns []shared.WorkflowRun `json:"workflow_runs"`
    
}

type ActionsListWorkflowRunsForRepoResponse struct {
    ContentType string 
    Headers map[string][]string 
    StatusCode int64 
    ActionsListWorkflowRunsForRepo200ApplicationJSONObject *ActionsListWorkflowRunsForRepo200ApplicationJSON 
    
}

