package operations



type TeamsDeletePathParams struct {
    TeamID int64 `pathParam:"style=simple,explode=false,name=team_id"`
    
}

type TeamsDeleteRequest struct {
    PathParams TeamsDeletePathParams 
    
}

type TeamsDeleteResponse struct {
    ContentType string 
    StatusCode int64 
    
}

