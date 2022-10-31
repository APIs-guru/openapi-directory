package operations



type OrgsRemovePublicMembershipForAuthenticatedUserPathParams struct {
    Org string `pathParam:"style=simple,explode=false,name=org"`
    Username string `pathParam:"style=simple,explode=false,name=username"`
    
}

type OrgsRemovePublicMembershipForAuthenticatedUserRequest struct {
    PathParams OrgsRemovePublicMembershipForAuthenticatedUserPathParams 
    
}

type OrgsRemovePublicMembershipForAuthenticatedUserResponse struct {
    ContentType string 
    StatusCode int64 
    
}

