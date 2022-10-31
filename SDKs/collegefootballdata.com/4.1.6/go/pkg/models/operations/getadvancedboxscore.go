package operations

import (
"openapi/pkg/models/shared")

type GetAdvancedBoxScoreQueryParams struct {
    GameID int64 `queryParam:"style=form,explode=true,name=gameId"`
    
}

type GetAdvancedBoxScoreRequest struct {
    QueryParams GetAdvancedBoxScoreQueryParams 
    
}

type GetAdvancedBoxScoreResponse struct {
    BoxScore *shared.BoxScore 
    ContentType string 
    StatusCode int64 
    
}

