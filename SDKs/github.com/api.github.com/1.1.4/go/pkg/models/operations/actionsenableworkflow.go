package operations



type ActionsEnableWorkflowPathParams struct {
    Owner string `pathParam:"style=simple,explode=false,name=owner"`
    Repo string `pathParam:"style=simple,explode=false,name=repo"`
    WorkflowID interface{} `pathParam:"style=simple,explode=false,name=workflow_id"`
    
}

type ActionsEnableWorkflowRequest struct {
    PathParams ActionsEnableWorkflowPathParams 
    
}

type ActionsEnableWorkflowResponse struct {
    ContentType string 
    StatusCode int64 
    
}

