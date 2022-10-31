package operations

import (
"openapi/pkg/models/shared")

type TeamsGetMembershipForUserPathParams struct {
    TeamID int64 `pathParam:"style=simple,explode=false,name=team_id"`
    Username string `pathParam:"style=simple,explode=false,name=username"`
    
}

type TeamsGetMembershipForUserRequest struct {
    PathParams TeamsGetMembershipForUserPathParams 
    
}

type TeamsGetMembershipForUserResponse struct {
    ContentType string 
    StatusCode int64 
    TeamMembership *shared.TeamMembership 
    
}

