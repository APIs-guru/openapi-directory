package operations

import (
"openapi/pkg/models/shared")

type GetTeamRecordsQueryParams struct {
    Conference *string `queryParam:"style=form,explode=true,name=conference"`
    Team *string `queryParam:"style=form,explode=true,name=team"`
    Year *int64 `queryParam:"style=form,explode=true,name=year"`
    
}

type GetTeamRecordsRequest struct {
    QueryParams GetTeamRecordsQueryParams 
    
}

type GetTeamRecordsResponse struct {
    ContentType string 
    StatusCode int64 
    TeamRecords []shared.TeamRecord 
    
}

