package operations

import (
"openapi/pkg/models/shared")

type UsersGetPrefsPathParams struct {
    UserID string `pathParam:"style=simple,explode=false,name=userId"`
    
}

type UsersGetPrefsSecurity struct {
    Key shared.SchemeKey `security:"scheme,type=apiKey,subtype=header"`
    Project shared.SchemeProject `security:"scheme,type=apiKey,subtype=header"`
    
}

type UsersGetPrefsRequest struct {
    PathParams UsersGetPrefsPathParams 
    Security UsersGetPrefsSecurity 
    
}

type UsersGetPrefsResponse struct {
    ContentType string 
    StatusCode int64 
    Preferences map[string]interface{} 
    
}

