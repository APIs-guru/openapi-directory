package operations

import (
"openapi/pkg/models/shared")

type UserGetMembershipDataForCurrentUserSecurity struct {
    Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
    
}

type UserGetMembershipDataForCurrentUserRequest struct {
    Security UserGetMembershipDataForCurrentUserSecurity 
    
}

type UserGetMembershipDataForCurrentUserResponse struct {
    Body []byte 
    ContentType string 
    StatusCode int64 
    
}

