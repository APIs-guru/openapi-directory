package operations

import (
"openapi/pkg/models/shared")

type GetPredictedPointsQueryParams struct {
    Distance int64 `queryParam:"style=form,explode=true,name=distance"`
    Down int64 `queryParam:"style=form,explode=true,name=down"`
    
}

type GetPredictedPointsRequest struct {
    QueryParams GetPredictedPointsQueryParams 
    
}

type GetPredictedPointsResponse struct {
    ContentType string 
    PredictedPoints []shared.PredictedPoints 
    StatusCode int64 
    
}

