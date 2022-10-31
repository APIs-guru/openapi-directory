package operations

import (
"openapi/pkg/models/shared")

type TeamsGetPathParams struct {
    TeamID int64 `pathParam:"style=simple,explode=false,name=team_id"`
    
}

type TeamsGetRequest struct {
    PathParams TeamsGetPathParams 
    
}

type TeamsGetResponse struct {
    ContentType string 
    StatusCode int64 
    TeamFull *shared.TeamFull 
    
}

