package operations

import (
"openapi/pkg/models/shared")

type GetGamesQueryParams struct {
    Away *string `queryParam:"style=form,explode=true,name=away"`
    Conference *string `queryParam:"style=form,explode=true,name=conference"`
    Home *string `queryParam:"style=form,explode=true,name=home"`
    ID *int64 `queryParam:"style=form,explode=true,name=id"`
    SeasonType *string `queryParam:"style=form,explode=true,name=seasonType"`
    Team *string `queryParam:"style=form,explode=true,name=team"`
    Week *int64 `queryParam:"style=form,explode=true,name=week"`
    Year int64 `queryParam:"style=form,explode=true,name=year"`
    
}

type GetGamesRequest struct {
    QueryParams GetGamesQueryParams 
    
}

type GetGamesResponse struct {
    ContentType string 
    Games []shared.Game 
    StatusCode int64 
    
}

