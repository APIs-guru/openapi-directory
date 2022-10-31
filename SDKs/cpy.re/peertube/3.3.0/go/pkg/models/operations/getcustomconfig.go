package operations

import (
"openapi/pkg/models/shared")

type GetCustomConfigSecurity struct {
    OAuth2 shared.SchemeOAuth2 `security:"scheme,type=oauth2"`
    
}

type GetCustomConfigRequest struct {
    Security GetCustomConfigSecurity 
    
}

type GetCustomConfigResponse struct {
    ContentType string 
    ServerConfigCustom *interface{} 
    StatusCode int64 
    
}

