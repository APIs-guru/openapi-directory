package operations

import (
"openapi/pkg/models/shared")

type PutUserInfoSecurity struct {
    OAuth2 shared.SchemeOAuth2 `security:"scheme,type=oauth2"`
    
}

type PutUserInfoRequest struct {
    Request interface{} `request:"mediaType=application/json"`
    Security PutUserInfoSecurity 
    
}

type PutUserInfoResponse struct {
    ContentType string 
    StatusCode int64 
    
}

