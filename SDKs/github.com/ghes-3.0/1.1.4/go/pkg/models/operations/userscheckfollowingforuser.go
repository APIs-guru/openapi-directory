package operations



type UsersCheckFollowingForUserPathParams struct {
    TargetUser string `pathParam:"style=simple,explode=false,name=target_user"`
    Username string `pathParam:"style=simple,explode=false,name=username"`
    
}

type UsersCheckFollowingForUserRequest struct {
    PathParams UsersCheckFollowingForUserPathParams 
    
}

type UsersCheckFollowingForUserResponse struct {
    ContentType string 
    StatusCode int64 
    
}

