package operations

import (
"openapi/pkg/models/shared")

type PutUserPathParams struct {
    ID int64 `pathParam:"style=simple,explode=false,name=id"`
    
}

type PutUserSecurity struct {
    OAuth2 shared.SchemeOAuth2 `security:"scheme,type=oauth2"`
    
}

type PutUserRequest struct {
    PathParams PutUserPathParams 
    Request interface{} `request:"mediaType=application/json"`
    Security PutUserSecurity 
    
}

type PutUserResponse struct {
    ContentType string 
    StatusCode int64 
    
}

