package operations

import (
"openapi/pkg/models/shared")

type AddUserSecurity struct {
    OAuth2 shared.SchemeOAuth2 `security:"scheme,type=oauth2"`
    
}

type AddUserRequest struct {
    Request interface{} `request:"mediaType=application/json"`
    Security AddUserSecurity 
    
}

type AddUserResponse struct {
    AddUserResponse *interface{} 
    ContentType string 
    StatusCode int64 
    
}

