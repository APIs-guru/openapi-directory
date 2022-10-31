package operations



type GetPipelineForRepositoryPathParams struct {
    PipelineUUID string `pathParam:"style=simple,explode=false,name=pipeline_uuid"`
    RepoSlug string `pathParam:"style=simple,explode=false,name=repo_slug"`
    Workspace string `pathParam:"style=simple,explode=false,name=workspace"`
    
}

type GetPipelineForRepositoryRequest struct {
    PathParams GetPipelineForRepositoryPathParams 
    
}

type GetPipelineForRepositoryResponse struct {
    ContentType string 
    StatusCode int64 
    Error map[string]interface{} 
    Pipeline map[string]interface{} 
    
}

