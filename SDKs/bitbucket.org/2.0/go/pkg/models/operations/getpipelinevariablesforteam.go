package operations

import (
"openapi/pkg/models/shared")

type GetPipelineVariablesForTeamPathParams struct {
    Username string `pathParam:"style=simple,explode=false,name=username"`
    
}

type GetPipelineVariablesForTeamQueryParams struct {
    Workspace string `queryParam:"style=form,explode=true,name=workspace"`
    
}

type GetPipelineVariablesForTeamRequest struct {
    PathParams GetPipelineVariablesForTeamPathParams 
    QueryParams GetPipelineVariablesForTeamQueryParams 
    
}

type GetPipelineVariablesForTeamResponse struct {
    ContentType string 
    StatusCode int64 
    PaginatedPipelineVariables *shared.PaginatedPipelineVariables 
    
}

