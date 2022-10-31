package operations

import (
"openapi/pkg/models/shared")

type DeleteAddonSecurityOption1 struct {
    Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
    
}

type DeleteAddonSecurityOption2 struct {
    Basic shared.SchemeBasic `security:"scheme,type=http,subtype=basic"`
    
}

type DeleteAddonSecurityOption3 struct {
    APIKey shared.SchemeAPIKey `security:"scheme,type=apiKey,subtype=header"`
    
}

type DeleteAddonSecurity struct {
    Option1 *DeleteAddonSecurityOption1 `security:"option"`
    Option2 *DeleteAddonSecurityOption2 `security:"option"`
    Option3 *DeleteAddonSecurityOption3 `security:"option"`
    
}

type DeleteAddonRequest struct {
    Security DeleteAddonSecurity 
    
}

type DeleteAddonResponse struct {
    ContentType string 
    StatusCode int64 
    Error map[string]interface{} 
    
}

