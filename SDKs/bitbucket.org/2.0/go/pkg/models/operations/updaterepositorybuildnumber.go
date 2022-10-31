package operations



type UpdateRepositoryBuildNumberPathParams struct {
    RepoSlug string `pathParam:"style=simple,explode=false,name=repo_slug"`
    Workspace string `pathParam:"style=simple,explode=false,name=workspace"`
    
}

type UpdateRepositoryBuildNumberRequest struct {
    PathParams UpdateRepositoryBuildNumberPathParams 
    Request map[string]interface{} `request:"mediaType=application/json"`
    
}

type UpdateRepositoryBuildNumberResponse struct {
    ContentType string 
    StatusCode int64 
    Error map[string]interface{} 
    PipelineBuildNumber map[string]interface{} 
    
}

