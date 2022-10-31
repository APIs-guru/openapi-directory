package operations

import (
"openapi/pkg/models/shared")

type UsersUnfollowPathParams struct {
    Username string `pathParam:"style=simple,explode=false,name=username"`
    
}

type UsersUnfollowRequest struct {
    PathParams UsersUnfollowPathParams 
    
}

type UsersUnfollowResponse struct {
    ContentType string 
    StatusCode int64 
    BasicError *shared.BasicError 
    
}

