package operations

import (
"openapi/pkg/models/shared")

type GetRepositoryPipelineKnownHostsPathParams struct {
    RepoSlug string `pathParam:"style=simple,explode=false,name=repo_slug"`
    Workspace string `pathParam:"style=simple,explode=false,name=workspace"`
    
}

type GetRepositoryPipelineKnownHostsRequest struct {
    PathParams GetRepositoryPipelineKnownHostsPathParams 
    
}

type GetRepositoryPipelineKnownHostsResponse struct {
    ContentType string 
    StatusCode int64 
    PaginatedPipelineKnownHosts *shared.PaginatedPipelineKnownHosts 
    
}

