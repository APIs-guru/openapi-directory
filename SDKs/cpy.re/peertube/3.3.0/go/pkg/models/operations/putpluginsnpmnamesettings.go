package operations

import (
"openapi/pkg/models/shared")

type PutPluginsNpmNameSettingsPathParams struct {
    NpmName string `pathParam:"style=simple,explode=false,name=npmName"`
    
}

type PutPluginsNpmNameSettingsRequestBody struct {
    Settings map[string]interface{} `json:"settings,omitempty"`
    
}

type PutPluginsNpmNameSettingsSecurity struct {
    OAuth2 shared.SchemeOAuth2 `security:"scheme,type=oauth2"`
    
}

type PutPluginsNpmNameSettingsRequest struct {
    PathParams PutPluginsNpmNameSettingsPathParams 
    Request *PutPluginsNpmNameSettingsRequestBody `request:"mediaType=application/json"`
    Security PutPluginsNpmNameSettingsSecurity 
    
}

type PutPluginsNpmNameSettingsResponse struct {
    ContentType string 
    StatusCode int64 
    
}

