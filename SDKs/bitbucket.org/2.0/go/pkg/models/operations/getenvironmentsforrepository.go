package operations

import (
"openapi/pkg/models/shared")

type GetEnvironmentsForRepositoryPathParams struct {
    RepoSlug string `pathParam:"style=simple,explode=false,name=repo_slug"`
    Workspace string `pathParam:"style=simple,explode=false,name=workspace"`
    
}

type GetEnvironmentsForRepositoryRequest struct {
    PathParams GetEnvironmentsForRepositoryPathParams 
    
}

type GetEnvironmentsForRepositoryResponse struct {
    ContentType string 
    StatusCode int64 
    PaginatedEnvironments *shared.PaginatedEnvironments 
    
}

