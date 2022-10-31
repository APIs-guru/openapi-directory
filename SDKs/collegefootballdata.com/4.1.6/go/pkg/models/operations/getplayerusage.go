package operations

import (
"openapi/pkg/models/shared")

type GetPlayerUsageQueryParams struct {
    Conference *string `queryParam:"style=form,explode=true,name=conference"`
    ExcludeGarbageTime *bool `queryParam:"style=form,explode=true,name=excludeGarbageTime"`
    PlayerID *int64 `queryParam:"style=form,explode=true,name=playerId"`
    Position *string `queryParam:"style=form,explode=true,name=position"`
    Team *string `queryParam:"style=form,explode=true,name=team"`
    Year int64 `queryParam:"style=form,explode=true,name=year"`
    
}

type GetPlayerUsageRequest struct {
    QueryParams GetPlayerUsageQueryParams 
    
}

type GetPlayerUsageResponse struct {
    ContentType string 
    PlayerUsages []shared.PlayerUsage 
    StatusCode int64 
    
}

