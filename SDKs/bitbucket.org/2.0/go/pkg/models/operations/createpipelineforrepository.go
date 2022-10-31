package operations



type CreatePipelineForRepositoryPathParams struct {
    RepoSlug string `pathParam:"style=simple,explode=false,name=repo_slug"`
    Workspace string `pathParam:"style=simple,explode=false,name=workspace"`
    
}

type CreatePipelineForRepositoryRequest struct {
    PathParams CreatePipelineForRepositoryPathParams 
    Request map[string]interface{} `request:"mediaType=application/json"`
    
}

type CreatePipelineForRepositoryResponse struct {
    ContentType string 
    Headers map[string][]string 
    StatusCode int64 
    Error map[string]interface{} 
    Pipeline map[string]interface{} 
    
}

