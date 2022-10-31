package operations

import (
"openapi/pkg/models/shared")

type GetAddonLinkersSecurityOption1 struct {
    Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
    
}

type GetAddonLinkersSecurityOption2 struct {
    Basic shared.SchemeBasic `security:"scheme,type=http,subtype=basic"`
    
}

type GetAddonLinkersSecurityOption3 struct {
    APIKey shared.SchemeAPIKey `security:"scheme,type=apiKey,subtype=header"`
    
}

type GetAddonLinkersSecurity struct {
    Option1 *GetAddonLinkersSecurityOption1 `security:"option"`
    Option2 *GetAddonLinkersSecurityOption2 `security:"option"`
    Option3 *GetAddonLinkersSecurityOption3 `security:"option"`
    
}

type GetAddonLinkersRequest struct {
    Security GetAddonLinkersSecurity 
    
}

type GetAddonLinkersResponse struct {
    ContentType string 
    StatusCode int64 
    Error map[string]interface{} 
    
}

