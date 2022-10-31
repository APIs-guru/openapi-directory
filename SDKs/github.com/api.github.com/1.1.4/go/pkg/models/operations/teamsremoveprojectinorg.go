package operations



type TeamsRemoveProjectInOrgPathParams struct {
    Org string `pathParam:"style=simple,explode=false,name=org"`
    ProjectID int64 `pathParam:"style=simple,explode=false,name=project_id"`
    TeamSlug string `pathParam:"style=simple,explode=false,name=team_slug"`
    
}

type TeamsRemoveProjectInOrgRequest struct {
    PathParams TeamsRemoveProjectInOrgPathParams 
    
}

type TeamsRemoveProjectInOrgResponse struct {
    ContentType string 
    StatusCode int64 
    
}

