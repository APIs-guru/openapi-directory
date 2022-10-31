package operations



type OrgsCheckPublicMembershipForUserPathParams struct {
    Org string `pathParam:"style=simple,explode=false,name=org"`
    Username string `pathParam:"style=simple,explode=false,name=username"`
    
}

type OrgsCheckPublicMembershipForUserRequest struct {
    PathParams OrgsCheckPublicMembershipForUserPathParams 
    
}

type OrgsCheckPublicMembershipForUserResponse struct {
    ContentType string 
    StatusCode int64 
    
}

