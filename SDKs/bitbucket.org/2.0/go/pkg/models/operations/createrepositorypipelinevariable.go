package operations



type CreateRepositoryPipelineVariablePathParams struct {
    RepoSlug string `pathParam:"style=simple,explode=false,name=repo_slug"`
    Workspace string `pathParam:"style=simple,explode=false,name=workspace"`
    
}

type CreateRepositoryPipelineVariableRequest struct {
    PathParams CreateRepositoryPipelineVariablePathParams 
    Request map[string]interface{} `request:"mediaType=application/json"`
    
}

type CreateRepositoryPipelineVariableResponse struct {
    ContentType string 
    Headers map[string][]string 
    StatusCode int64 
    Error map[string]interface{} 
    PipelineVariable map[string]interface{} 
    
}

