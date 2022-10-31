package operations

import (
"openapi/pkg/models/shared")

type OrgsRemoveMembershipForUserPathParams struct {
    Org string `pathParam:"style=simple,explode=false,name=org"`
    Username string `pathParam:"style=simple,explode=false,name=username"`
    
}

type OrgsRemoveMembershipForUserRequest struct {
    PathParams OrgsRemoveMembershipForUserPathParams 
    
}

type OrgsRemoveMembershipForUserResponse struct {
    ContentType string 
    StatusCode int64 
    BasicError *shared.BasicError 
    
}

