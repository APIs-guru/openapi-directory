package operations



type DeleteAnnotationPathParams struct {
    AnnotationID string `pathParam:"style=simple,explode=false,name=annotationId"`
    Commit string `pathParam:"style=simple,explode=false,name=commit"`
    RepoSlug string `pathParam:"style=simple,explode=false,name=repo_slug"`
    ReportID string `pathParam:"style=simple,explode=false,name=reportId"`
    Workspace string `pathParam:"style=simple,explode=false,name=workspace"`
    
}

type DeleteAnnotationRequest struct {
    PathParams DeleteAnnotationPathParams 
    
}

type DeleteAnnotationResponse struct {
    ContentType string 
    StatusCode int64 
    
}

