package operations



type ActionsReRunWorkflowPathParams struct {
    Owner string `pathParam:"style=simple,explode=false,name=owner"`
    Repo string `pathParam:"style=simple,explode=false,name=repo"`
    RunID int64 `pathParam:"style=simple,explode=false,name=run_id"`
    
}

type ActionsReRunWorkflowRequest struct {
    PathParams ActionsReRunWorkflowPathParams 
    
}

type ActionsReRunWorkflowResponse struct {
    ContentType string 
    StatusCode int64 
    
}

