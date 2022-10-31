package operations

import (
"openapi/pkg/models/shared")

type UsersUpdatePrefsPathParams struct {
    UserID string `pathParam:"style=simple,explode=false,name=userId"`
    
}

type UsersUpdatePrefsRequestBody struct {
    Prefs map[string]interface{} `json:"prefs"`
    
}

type UsersUpdatePrefsSecurity struct {
    Key shared.SchemeKey `security:"scheme,type=apiKey,subtype=header"`
    Project shared.SchemeProject `security:"scheme,type=apiKey,subtype=header"`
    
}

type UsersUpdatePrefsRequest struct {
    PathParams UsersUpdatePrefsPathParams 
    Request *UsersUpdatePrefsRequestBody `request:"mediaType=application/json"`
    Security UsersUpdatePrefsSecurity 
    
}

type UsersUpdatePrefsResponse struct {
    ContentType string 
    StatusCode int64 
    Preferences map[string]interface{} 
    
}

