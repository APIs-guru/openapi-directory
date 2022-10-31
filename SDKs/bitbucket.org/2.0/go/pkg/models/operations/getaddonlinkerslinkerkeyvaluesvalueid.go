package operations

import (
"openapi/pkg/models/shared")

type GetAddonLinkersLinkerKeyValuesValueIDPathParams struct {
    LinkerKey string `pathParam:"style=simple,explode=false,name=linker_key"`
    ValueID int64 `pathParam:"style=simple,explode=false,name=value_id"`
    
}

type GetAddonLinkersLinkerKeyValuesValueIDSecurityOption1 struct {
    Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
    
}

type GetAddonLinkersLinkerKeyValuesValueIDSecurityOption2 struct {
    Basic shared.SchemeBasic `security:"scheme,type=http,subtype=basic"`
    
}

type GetAddonLinkersLinkerKeyValuesValueIDSecurityOption3 struct {
    APIKey shared.SchemeAPIKey `security:"scheme,type=apiKey,subtype=header"`
    
}

type GetAddonLinkersLinkerKeyValuesValueIDSecurity struct {
    Option1 *GetAddonLinkersLinkerKeyValuesValueIDSecurityOption1 `security:"option"`
    Option2 *GetAddonLinkersLinkerKeyValuesValueIDSecurityOption2 `security:"option"`
    Option3 *GetAddonLinkersLinkerKeyValuesValueIDSecurityOption3 `security:"option"`
    
}

type GetAddonLinkersLinkerKeyValuesValueIDRequest struct {
    PathParams GetAddonLinkersLinkerKeyValuesValueIDPathParams 
    Security GetAddonLinkersLinkerKeyValuesValueIDSecurity 
    
}

type GetAddonLinkersLinkerKeyValuesValueIDResponse struct {
    ContentType string 
    StatusCode int64 
    Error map[string]interface{} 
    
}

