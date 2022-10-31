package operations

import (
"openapi/pkg/models/shared")

type GetRecruitingGroupsQueryParams struct {
    Conference *string `queryParam:"style=form,explode=true,name=conference"`
    EndYear *int64 `queryParam:"style=form,explode=true,name=endYear"`
    StartYear *int64 `queryParam:"style=form,explode=true,name=startYear"`
    Team *string `queryParam:"style=form,explode=true,name=team"`
    
}

type GetRecruitingGroupsRequest struct {
    QueryParams GetRecruitingGroupsQueryParams 
    
}

type GetRecruitingGroupsResponse struct {
    ContentType string 
    PositionGroupRecruitingRatings []shared.PositionGroupRecruitingRating 
    StatusCode int64 
    
}

