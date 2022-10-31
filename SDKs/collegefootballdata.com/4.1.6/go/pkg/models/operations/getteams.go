package operations

import (
"openapi/pkg/models/shared")

type GetTeamsQueryParams struct {
    Conference *string `queryParam:"style=form,explode=true,name=conference"`
    
}

type GetTeamsRequest struct {
    QueryParams GetTeamsQueryParams 
    
}

type GetTeamsResponse struct {
    ContentType string 
    StatusCode int64 
    Teams []shared.Team 
    
}

