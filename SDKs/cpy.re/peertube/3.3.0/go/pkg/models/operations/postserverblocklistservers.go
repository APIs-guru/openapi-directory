package operations

import (
"openapi/pkg/models/shared")

type PostServerBlocklistServersRequestBody struct {
    Host string `json:"host"`
    
}

type PostServerBlocklistServersSecurity struct {
    OAuth2 shared.SchemeOAuth2 `security:"scheme,type=oauth2"`
    
}

type PostServerBlocklistServersRequest struct {
    Request *PostServerBlocklistServersRequestBody `request:"mediaType=application/json"`
    Security PostServerBlocklistServersSecurity 
    
}

type PostServerBlocklistServersResponse struct {
    ContentType string 
    StatusCode int64 
    
}

