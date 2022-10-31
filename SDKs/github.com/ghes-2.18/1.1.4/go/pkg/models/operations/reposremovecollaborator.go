package operations



type ReposRemoveCollaboratorPathParams struct {
    Owner string `pathParam:"style=simple,explode=false,name=owner"`
    Repo string `pathParam:"style=simple,explode=false,name=repo"`
    Username string `pathParam:"style=simple,explode=false,name=username"`
    
}

type ReposRemoveCollaboratorRequest struct {
    PathParams ReposRemoveCollaboratorPathParams 
    
}

type ReposRemoveCollaboratorResponse struct {
    ContentType string 
    StatusCode int64 
    
}

