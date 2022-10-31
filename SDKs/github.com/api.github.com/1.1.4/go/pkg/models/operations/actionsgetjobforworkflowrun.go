package operations

import (
"openapi/pkg/models/shared")

type ActionsGetJobForWorkflowRunPathParams struct {
    JobID int64 `pathParam:"style=simple,explode=false,name=job_id"`
    Owner string `pathParam:"style=simple,explode=false,name=owner"`
    Repo string `pathParam:"style=simple,explode=false,name=repo"`
    
}

type ActionsGetJobForWorkflowRunRequest struct {
    PathParams ActionsGetJobForWorkflowRunPathParams 
    
}

type ActionsGetJobForWorkflowRunResponse struct {
    ContentType string 
    StatusCode int64 
    Job *shared.Job 
    
}

