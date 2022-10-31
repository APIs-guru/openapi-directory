package operations

import (
"openapi/pkg/models/shared")

type GetPipelineStepsForRepositoryPathParams struct {
    PipelineUUID string `pathParam:"style=simple,explode=false,name=pipeline_uuid"`
    RepoSlug string `pathParam:"style=simple,explode=false,name=repo_slug"`
    Workspace string `pathParam:"style=simple,explode=false,name=workspace"`
    
}

type GetPipelineStepsForRepositoryRequest struct {
    PathParams GetPipelineStepsForRepositoryPathParams 
    
}

type GetPipelineStepsForRepositoryResponse struct {
    ContentType string 
    StatusCode int64 
    PaginatedPipelineSteps *shared.PaginatedPipelineSteps 
    
}

