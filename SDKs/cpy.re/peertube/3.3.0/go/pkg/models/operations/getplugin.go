package operations

import (
"openapi/pkg/models/shared")

type GetPluginPathParams struct {
    NpmName string `pathParam:"style=simple,explode=false,name=npmName"`
    
}

type GetPluginSecurity struct {
    OAuth2 shared.SchemeOAuth2 `security:"scheme,type=oauth2"`
    
}

type GetPluginRequest struct {
    PathParams GetPluginPathParams 
    Security GetPluginSecurity 
    
}

type GetPluginResponse struct {
    ContentType string 
    Plugin *interface{} 
    StatusCode int64 
    
}

