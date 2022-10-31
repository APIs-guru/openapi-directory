package operations



type TeamsDeleteInOrgPathParams struct {
    Org string `pathParam:"style=simple,explode=false,name=org"`
    TeamSlug string `pathParam:"style=simple,explode=false,name=team_slug"`
    
}

type TeamsDeleteInOrgRequest struct {
    PathParams TeamsDeleteInOrgPathParams 
    
}

type TeamsDeleteInOrgResponse struct {
    ContentType string 
    StatusCode int64 
    
}

