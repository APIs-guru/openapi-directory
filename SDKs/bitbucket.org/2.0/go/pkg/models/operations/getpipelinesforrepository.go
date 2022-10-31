package operations

import (
"openapi/pkg/models/shared")

type GetPipelinesForRepositoryPathParams struct {
    RepoSlug string `pathParam:"style=simple,explode=false,name=repo_slug"`
    Workspace string `pathParam:"style=simple,explode=false,name=workspace"`
    
}

type GetPipelinesForRepositoryRequest struct {
    PathParams GetPipelinesForRepositoryPathParams 
    
}

type GetPipelinesForRepositoryResponse struct {
    ContentType string 
    StatusCode int64 
    PaginatedPipelines *shared.PaginatedPipelines 
    
}

