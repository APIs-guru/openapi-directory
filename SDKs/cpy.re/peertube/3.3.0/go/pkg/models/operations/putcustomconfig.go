package operations

import (
"openapi/pkg/models/shared")

type PutCustomConfigSecurity struct {
    OAuth2 shared.SchemeOAuth2 `security:"scheme,type=oauth2"`
    
}

type PutCustomConfigRequest struct {
    Security PutCustomConfigSecurity 
    
}

type PutCustomConfigResponse struct {
    ContentType string 
    StatusCode int64 
    
}

