package operations

import (
"openapi/pkg/models/shared")

type UsersBlockPathParams struct {
    Username string `pathParam:"style=simple,explode=false,name=username"`
    
}

type UsersBlockRequest struct {
    PathParams UsersBlockPathParams 
    
}

type UsersBlockResponse struct {
    ContentType string 
    StatusCode int64 
    BasicError *shared.BasicError 
    ValidationError *shared.ValidationError 
    
}

