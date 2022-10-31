package operations

import (
"openapi/pkg/models/shared")

type OrgsGetMembershipForAuthenticatedUserPathParams struct {
    Org string `pathParam:"style=simple,explode=false,name=org"`
    
}

type OrgsGetMembershipForAuthenticatedUserRequest struct {
    PathParams OrgsGetMembershipForAuthenticatedUserPathParams 
    
}

type OrgsGetMembershipForAuthenticatedUserResponse struct {
    ContentType string 
    StatusCode int64 
    BasicError *shared.BasicError 
    OrgMembership *shared.OrgMembership 
    
}

