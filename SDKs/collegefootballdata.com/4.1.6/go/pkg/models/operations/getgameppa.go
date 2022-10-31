package operations

import (
"openapi/pkg/models/shared")

type GetGamePpaQueryParams struct {
    Conference *string `queryParam:"style=form,explode=true,name=conference"`
    ExcludeGarbageTime *bool `queryParam:"style=form,explode=true,name=excludeGarbageTime"`
    SeasonType *string `queryParam:"style=form,explode=true,name=seasonType"`
    Team *string `queryParam:"style=form,explode=true,name=team"`
    Week *int64 `queryParam:"style=form,explode=true,name=week"`
    Year int64 `queryParam:"style=form,explode=true,name=year"`
    
}

type GetGamePpaRequest struct {
    QueryParams GetGamePpaQueryParams 
    
}

type GetGamePpaResponse struct {
    ContentType string 
    GamePpas []shared.GamePpa 
    StatusCode int64 
    
}

