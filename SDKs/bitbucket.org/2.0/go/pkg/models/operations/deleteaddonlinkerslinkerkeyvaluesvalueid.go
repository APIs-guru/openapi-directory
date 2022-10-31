package operations

import (
"openapi/pkg/models/shared")

type DeleteAddonLinkersLinkerKeyValuesValueIDPathParams struct {
    LinkerKey string `pathParam:"style=simple,explode=false,name=linker_key"`
    ValueID int64 `pathParam:"style=simple,explode=false,name=value_id"`
    
}

type DeleteAddonLinkersLinkerKeyValuesValueIDSecurityOption1 struct {
    Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
    
}

type DeleteAddonLinkersLinkerKeyValuesValueIDSecurityOption2 struct {
    Basic shared.SchemeBasic `security:"scheme,type=http,subtype=basic"`
    
}

type DeleteAddonLinkersLinkerKeyValuesValueIDSecurityOption3 struct {
    APIKey shared.SchemeAPIKey `security:"scheme,type=apiKey,subtype=header"`
    
}

type DeleteAddonLinkersLinkerKeyValuesValueIDSecurity struct {
    Option1 *DeleteAddonLinkersLinkerKeyValuesValueIDSecurityOption1 `security:"option"`
    Option2 *DeleteAddonLinkersLinkerKeyValuesValueIDSecurityOption2 `security:"option"`
    Option3 *DeleteAddonLinkersLinkerKeyValuesValueIDSecurityOption3 `security:"option"`
    
}

type DeleteAddonLinkersLinkerKeyValuesValueIDRequest struct {
    PathParams DeleteAddonLinkersLinkerKeyValuesValueIDPathParams 
    Security DeleteAddonLinkersLinkerKeyValuesValueIDSecurity 
    
}

type DeleteAddonLinkersLinkerKeyValuesValueIDResponse struct {
    ContentType string 
    StatusCode int64 
    Error map[string]interface{} 
    
}

