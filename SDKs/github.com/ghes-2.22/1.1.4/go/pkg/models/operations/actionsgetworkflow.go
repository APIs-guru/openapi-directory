package operations

import (
"openapi/pkg/models/shared")

type ActionsGetWorkflowPathParams struct {
    Owner string `pathParam:"style=simple,explode=false,name=owner"`
    Repo string `pathParam:"style=simple,explode=false,name=repo"`
    WorkflowID interface{} `pathParam:"style=simple,explode=false,name=workflow_id"`
    
}

type ActionsGetWorkflowRequest struct {
    PathParams ActionsGetWorkflowPathParams 
    
}

type ActionsGetWorkflowResponse struct {
    ContentType string 
    StatusCode int64 
    Workflow *shared.Workflow 
    
}

