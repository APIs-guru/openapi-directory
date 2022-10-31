package operations

import (
"openapi/pkg/models/shared")

type RankCarQueryParams struct {
    APIKey *string `queryParam:"style=form,explode=true,name=api_key"`
    AppendAPIKey *bool `queryParam:"style=form,explode=true,name=append_api_key"`
    
}

type RankCarRequest struct {
    QueryParams RankCarQueryParams 
    Request shared.CarRankRequest `request:"mediaType=application/json"`
    
}

type RankCarResponse struct {
    CarRankResponse *shared.CarRankResponse 
    ContentType string 
    Error *shared.Error 
    StatusCode int64 
    
}

