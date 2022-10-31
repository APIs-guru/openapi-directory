package operations



type ActionsDownloadWorkflowRunLogsPathParams struct {
    Owner string `pathParam:"style=simple,explode=false,name=owner"`
    Repo string `pathParam:"style=simple,explode=false,name=repo"`
    RunID int64 `pathParam:"style=simple,explode=false,name=run_id"`
    
}

type ActionsDownloadWorkflowRunLogsRequest struct {
    PathParams ActionsDownloadWorkflowRunLogsPathParams 
    
}

type ActionsDownloadWorkflowRunLogsResponse struct {
    ContentType string 
    Headers map[string][]string 
    StatusCode int64 
    
}

