package operations

import (
"openapi/pkg/models/shared")

type GetSrsRatingsQueryParams struct {
    Conference *string `queryParam:"style=form,explode=true,name=conference"`
    Team *string `queryParam:"style=form,explode=true,name=team"`
    Year *int64 `queryParam:"style=form,explode=true,name=year"`
    
}

type GetSrsRatingsRequest struct {
    QueryParams GetSrsRatingsQueryParams 
    
}

type GetSrsRatingsResponse struct {
    ContentType string 
    StatusCode int64 
    TeamSrsRatings []shared.TeamSrsRating 
    
}

