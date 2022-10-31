package operations

import (
"openapi/pkg/models/shared")

type OrgsRemoveMemberPathParams struct {
    Org string `pathParam:"style=simple,explode=false,name=org"`
    Username string `pathParam:"style=simple,explode=false,name=username"`
    
}

type OrgsRemoveMemberRequest struct {
    PathParams OrgsRemoveMemberPathParams 
    
}

type OrgsRemoveMemberResponse struct {
    ContentType string 
    StatusCode int64 
    BasicError *shared.BasicError 
    
}

