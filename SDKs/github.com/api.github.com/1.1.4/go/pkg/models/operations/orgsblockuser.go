package operations

import (
"openapi/pkg/models/shared")

type OrgsBlockUserPathParams struct {
    Org string `pathParam:"style=simple,explode=false,name=org"`
    Username string `pathParam:"style=simple,explode=false,name=username"`
    
}

type OrgsBlockUserRequest struct {
    PathParams OrgsBlockUserPathParams 
    
}

type OrgsBlockUserResponse struct {
    ContentType string 
    StatusCode int64 
    ValidationError *shared.ValidationError 
    
}

