package operations

import (
"openapi/pkg/models/shared")

type GetGameMediaQueryParams struct {
    Conference *string `queryParam:"style=form,explode=true,name=conference"`
    MediaType *string `queryParam:"style=form,explode=true,name=mediaType"`
    SeasonType *string `queryParam:"style=form,explode=true,name=seasonType"`
    Team *string `queryParam:"style=form,explode=true,name=team"`
    Week *int64 `queryParam:"style=form,explode=true,name=week"`
    Year int64 `queryParam:"style=form,explode=true,name=year"`
    
}

type GetGameMediaRequest struct {
    QueryParams GetGameMediaQueryParams 
    
}

type GetGameMediaResponse struct {
    ContentType string 
    GameMedias []shared.GameMedia 
    StatusCode int64 
    
}

