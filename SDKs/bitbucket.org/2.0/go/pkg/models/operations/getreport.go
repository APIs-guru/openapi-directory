package operations



type GetReportPathParams struct {
    Commit string `pathParam:"style=simple,explode=false,name=commit"`
    RepoSlug string `pathParam:"style=simple,explode=false,name=repo_slug"`
    ReportID string `pathParam:"style=simple,explode=false,name=reportId"`
    Workspace string `pathParam:"style=simple,explode=false,name=workspace"`
    
}

type GetReportRequest struct {
    PathParams GetReportPathParams 
    
}

type GetReportResponse struct {
    ContentType string 
    StatusCode int64 
    Error map[string]interface{} 
    Report map[string]interface{} 
    
}

