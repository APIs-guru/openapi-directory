package operations

import (
"openapi/pkg/models/shared")

type ActionsListRepoWorkflowsPathParams struct {
    Owner string `pathParam:"style=simple,explode=false,name=owner"`
    Repo string `pathParam:"style=simple,explode=false,name=repo"`
    
}

type ActionsListRepoWorkflowsQueryParams struct {
    Page *int64 `queryParam:"style=form,explode=true,name=page"`
    PerPage *int64 `queryParam:"style=form,explode=true,name=per_page"`
    
}

type ActionsListRepoWorkflowsRequest struct {
    PathParams ActionsListRepoWorkflowsPathParams 
    QueryParams ActionsListRepoWorkflowsQueryParams 
    
}

type ActionsListRepoWorkflows200ApplicationJSON struct {
    TotalCount int64 `json:"total_count"`
    Workflows []shared.Workflow `json:"workflows"`
    
}

type ActionsListRepoWorkflowsResponse struct {
    ContentType string 
    Headers map[string][]string 
    StatusCode int64 
    ActionsListRepoWorkflows200ApplicationJSONObject *ActionsListRepoWorkflows200ApplicationJSON 
    
}

