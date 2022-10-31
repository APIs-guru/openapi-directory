package operations



type DeleteRepositoryPipelineCachePathParams struct {
    CacheUUID string `pathParam:"style=simple,explode=false,name=cache_uuid"`
    RepoSlug string `pathParam:"style=simple,explode=false,name=repo_slug"`
    Workspace string `pathParam:"style=simple,explode=false,name=workspace"`
    
}

type DeleteRepositoryPipelineCacheRequest struct {
    PathParams DeleteRepositoryPipelineCachePathParams 
    
}

type DeleteRepositoryPipelineCacheResponse struct {
    ContentType string 
    StatusCode int64 
    Error map[string]interface{} 
    
}

