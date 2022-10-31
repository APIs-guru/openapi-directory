package operations

import (
"openapi/pkg/models/shared")

type GetUserInfoSecurity struct {
    OAuth2 shared.SchemeOAuth2 `security:"scheme,type=oauth2"`
    
}

type GetUserInfoRequest struct {
    Security GetUserInfoSecurity 
    
}

type GetUserInfoResponse struct {
    ContentType string 
    StatusCode int64 
    Users []interface{} 
    
}

