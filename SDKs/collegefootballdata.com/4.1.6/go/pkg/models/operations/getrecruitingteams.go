package operations

import (
"openapi/pkg/models/shared")

type GetRecruitingTeamsQueryParams struct {
    Team *string `queryParam:"style=form,explode=true,name=team"`
    Year *int64 `queryParam:"style=form,explode=true,name=year"`
    
}

type GetRecruitingTeamsRequest struct {
    QueryParams GetRecruitingTeamsQueryParams 
    
}

type GetRecruitingTeamsResponse struct {
    ContentType string 
    StatusCode int64 
    TeamRecruitingRanks []shared.TeamRecruitingRank 
    
}

