package operations

import (
"openapi/pkg/models/shared")

type ActionsGetWorkflowUsagePathParams struct {
    Owner string `pathParam:"style=simple,explode=false,name=owner"`
    Repo string `pathParam:"style=simple,explode=false,name=repo"`
    WorkflowID interface{} `pathParam:"style=simple,explode=false,name=workflow_id"`
    
}

type ActionsGetWorkflowUsageRequest struct {
    PathParams ActionsGetWorkflowUsagePathParams 
    
}

type ActionsGetWorkflowUsageResponse struct {
    ContentType string 
    StatusCode int64 
    WorkflowUsage *shared.WorkflowUsage 
    
}

