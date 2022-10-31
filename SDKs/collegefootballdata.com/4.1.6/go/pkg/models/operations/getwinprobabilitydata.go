package operations

import (
"openapi/pkg/models/shared")

type GetWinProbabilityDataQueryParams struct {
    GameID int64 `queryParam:"style=form,explode=true,name=gameId"`
    
}

type GetWinProbabilityDataRequest struct {
    QueryParams GetWinProbabilityDataQueryParams 
    
}

type GetWinProbabilityDataResponse struct {
    ContentType string 
    PlayWps []shared.PlayWp 
    StatusCode int64 
    
}

