package operations



type BulkCreateOrUpdateAnnotationsPathParams struct {
    Commit string `pathParam:"style=simple,explode=false,name=commit"`
    RepoSlug string `pathParam:"style=simple,explode=false,name=repo_slug"`
    ReportID string `pathParam:"style=simple,explode=false,name=reportId"`
    Workspace string `pathParam:"style=simple,explode=false,name=workspace"`
    
}

type BulkCreateOrUpdateAnnotationsRequest struct {
    PathParams BulkCreateOrUpdateAnnotationsPathParams 
    Request []map[string]interface{} `request:"mediaType=application/json"`
    
}

type BulkCreateOrUpdateAnnotationsResponse struct {
    ContentType string 
    StatusCode int64 
    ReportAnnotations []map[string]interface{} 
    
}

