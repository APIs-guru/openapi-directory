package operations



type UpdateRepositoryPipelineKnownHostPathParams struct {
    KnownHostUUID string `pathParam:"style=simple,explode=false,name=known_host_uuid"`
    RepoSlug string `pathParam:"style=simple,explode=false,name=repo_slug"`
    Workspace string `pathParam:"style=simple,explode=false,name=workspace"`
    
}

type UpdateRepositoryPipelineKnownHostRequest struct {
    PathParams UpdateRepositoryPipelineKnownHostPathParams 
    Request map[string]interface{} `request:"mediaType=application/json"`
    
}

type UpdateRepositoryPipelineKnownHostResponse struct {
    ContentType string 
    StatusCode int64 
    Error map[string]interface{} 
    PipelineKnownHost map[string]interface{} 
    
}

