package operations

import (
"openapi/pkg/models/shared")

type GetReturningProductionQueryParams struct {
    Conference *string `queryParam:"style=form,explode=true,name=conference"`
    Team *string `queryParam:"style=form,explode=true,name=team"`
    Year *int64 `queryParam:"style=form,explode=true,name=year"`
    
}

type GetReturningProductionRequest struct {
    QueryParams GetReturningProductionQueryParams 
    
}

type GetReturningProductionResponse struct {
    ContentType string 
    ReturningProductions []shared.ReturningProduction 
    StatusCode int64 
    
}

