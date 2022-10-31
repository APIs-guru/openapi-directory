package operations



type CreateOrUpdateReportPathParams struct {
    Commit string `pathParam:"style=simple,explode=false,name=commit"`
    RepoSlug string `pathParam:"style=simple,explode=false,name=repo_slug"`
    ReportID string `pathParam:"style=simple,explode=false,name=reportId"`
    Workspace string `pathParam:"style=simple,explode=false,name=workspace"`
    
}

type CreateOrUpdateReportRequest struct {
    PathParams CreateOrUpdateReportPathParams 
    Request map[string]interface{} `request:"mediaType=application/json"`
    
}

type CreateOrUpdateReportResponse struct {
    ContentType string 
    StatusCode int64 
    Error map[string]interface{} 
    Report map[string]interface{} 
    
}

