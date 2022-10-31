package operations

import (
"openapi/pkg/models/shared")

type AccountUpdatePrefsRequestBody struct {
    Prefs map[string]interface{} `json:"prefs"`
    
}

type AccountUpdatePrefsSecurity struct {
    Jwt shared.SchemeJwt `security:"scheme,type=apiKey,subtype=header"`
    Project shared.SchemeProject `security:"scheme,type=apiKey,subtype=header"`
    
}

type AccountUpdatePrefsRequest struct {
    Request *AccountUpdatePrefsRequestBody `request:"mediaType=application/json"`
    Security AccountUpdatePrefsSecurity 
    
}

type AccountUpdatePrefsResponse struct {
    ContentType string 
    StatusCode int64 
    User *shared.User 
    
}

