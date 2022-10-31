package operations

import (
"openapi/pkg/models/shared")

type OrgsSetPublicMembershipForAuthenticatedUserPathParams struct {
    Org string `pathParam:"style=simple,explode=false,name=org"`
    Username string `pathParam:"style=simple,explode=false,name=username"`
    
}

type OrgsSetPublicMembershipForAuthenticatedUserRequest struct {
    PathParams OrgsSetPublicMembershipForAuthenticatedUserPathParams 
    
}

type OrgsSetPublicMembershipForAuthenticatedUserResponse struct {
    ContentType string 
    StatusCode int64 
    BasicError *shared.BasicError 
    
}

