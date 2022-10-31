package operations



type ReposCheckCollaboratorPathParams struct {
    Owner string `pathParam:"style=simple,explode=false,name=owner"`
    Repo string `pathParam:"style=simple,explode=false,name=repo"`
    Username string `pathParam:"style=simple,explode=false,name=username"`
    
}

type ReposCheckCollaboratorRequest struct {
    PathParams ReposCheckCollaboratorPathParams 
    
}

type ReposCheckCollaboratorResponse struct {
    ContentType string 
    StatusCode int64 
    
}

