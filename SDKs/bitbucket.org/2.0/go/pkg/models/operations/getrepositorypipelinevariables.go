package operations

import (
"openapi/pkg/models/shared")

type GetRepositoryPipelineVariablesPathParams struct {
    RepoSlug string `pathParam:"style=simple,explode=false,name=repo_slug"`
    Workspace string `pathParam:"style=simple,explode=false,name=workspace"`
    
}

type GetRepositoryPipelineVariablesRequest struct {
    PathParams GetRepositoryPipelineVariablesPathParams 
    
}

type GetRepositoryPipelineVariablesResponse struct {
    ContentType string 
    StatusCode int64 
    PaginatedPipelineVariables *shared.PaginatedPipelineVariables 
    
}

