package operations

import (
"openapi/pkg/models/shared")

type GetSpRatingsQueryParams struct {
    Team *string `queryParam:"style=form,explode=true,name=team"`
    Year *int64 `queryParam:"style=form,explode=true,name=year"`
    
}

type GetSpRatingsRequest struct {
    QueryParams GetSpRatingsQueryParams 
    
}

type GetSpRatingsResponse struct {
    ContentType string 
    StatusCode int64 
    TeamSpRatings []shared.TeamSpRating 
    
}

