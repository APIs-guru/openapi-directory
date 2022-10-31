package operations



type DeleteReportPathParams struct {
    Commit string `pathParam:"style=simple,explode=false,name=commit"`
    RepoSlug string `pathParam:"style=simple,explode=false,name=repo_slug"`
    ReportID string `pathParam:"style=simple,explode=false,name=reportId"`
    Workspace string `pathParam:"style=simple,explode=false,name=workspace"`
    
}

type DeleteReportRequest struct {
    PathParams DeleteReportPathParams 
    
}

type DeleteReportResponse struct {
    ContentType string 
    StatusCode int64 
    
}

