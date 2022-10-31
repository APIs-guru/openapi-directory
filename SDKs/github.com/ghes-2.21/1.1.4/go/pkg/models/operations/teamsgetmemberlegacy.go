package operations



type TeamsGetMemberLegacyPathParams struct {
    TeamID int64 `pathParam:"style=simple,explode=false,name=team_id"`
    Username string `pathParam:"style=simple,explode=false,name=username"`
    
}

type TeamsGetMemberLegacyRequest struct {
    PathParams TeamsGetMemberLegacyPathParams 
    
}

type TeamsGetMemberLegacyResponse struct {
    ContentType string 
    StatusCode int64 
    
}

