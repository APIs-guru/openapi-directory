package operations



type TeamsRemoveMembershipForUserLegacyPathParams struct {
    TeamID int64 `pathParam:"style=simple,explode=false,name=team_id"`
    Username string `pathParam:"style=simple,explode=false,name=username"`
    
}

type TeamsRemoveMembershipForUserLegacyRequest struct {
    PathParams TeamsRemoveMembershipForUserLegacyPathParams 
    
}

type TeamsRemoveMembershipForUserLegacyResponse struct {
    ContentType string 
    StatusCode int64 
    
}

