package operations



type ReposDeleteInvitationPathParams struct {
    InvitationID int64 `pathParam:"style=simple,explode=false,name=invitation_id"`
    Owner string `pathParam:"style=simple,explode=false,name=owner"`
    Repo string `pathParam:"style=simple,explode=false,name=repo"`
    
}

type ReposDeleteInvitationRequest struct {
    PathParams ReposDeleteInvitationPathParams 
    
}

type ReposDeleteInvitationResponse struct {
    ContentType string 
    StatusCode int64 
    
}

