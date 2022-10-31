package operations

import (
"openapi/pkg/models/shared")

type GetPlayerSeasonPpaQueryParams struct {
    Conference *string `queryParam:"style=form,explode=true,name=conference"`
    ExcludeGarbageTime *bool `queryParam:"style=form,explode=true,name=excludeGarbageTime"`
    PlayerID *int64 `queryParam:"style=form,explode=true,name=playerId"`
    Position *string `queryParam:"style=form,explode=true,name=position"`
    Team *string `queryParam:"style=form,explode=true,name=team"`
    Threshold *string `queryParam:"style=form,explode=true,name=threshold"`
    Year *int64 `queryParam:"style=form,explode=true,name=year"`
    
}

type GetPlayerSeasonPpaRequest struct {
    QueryParams GetPlayerSeasonPpaQueryParams 
    
}

type GetPlayerSeasonPpaResponse struct {
    ContentType string 
    PlayerSeasonPpas []shared.PlayerSeasonPpa 
    StatusCode int64 
    
}

