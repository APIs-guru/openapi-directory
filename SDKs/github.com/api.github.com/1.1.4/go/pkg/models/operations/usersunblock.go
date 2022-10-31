package operations

import (
"openapi/pkg/models/shared")

type UsersUnblockPathParams struct {
    Username string `pathParam:"style=simple,explode=false,name=username"`
    
}

type UsersUnblockRequest struct {
    PathParams UsersUnblockPathParams 
    
}

type UsersUnblockResponse struct {
    ContentType string 
    StatusCode int64 
    BasicError *shared.BasicError 
    
}

