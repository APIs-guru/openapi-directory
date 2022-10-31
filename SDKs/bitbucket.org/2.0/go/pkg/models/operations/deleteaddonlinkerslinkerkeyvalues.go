package operations

import (
"openapi/pkg/models/shared")

type DeleteAddonLinkersLinkerKeyValuesPathParams struct {
    LinkerKey string `pathParam:"style=simple,explode=false,name=linker_key"`
    
}

type DeleteAddonLinkersLinkerKeyValuesSecurityOption1 struct {
    Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
    
}

type DeleteAddonLinkersLinkerKeyValuesSecurityOption2 struct {
    Basic shared.SchemeBasic `security:"scheme,type=http,subtype=basic"`
    
}

type DeleteAddonLinkersLinkerKeyValuesSecurityOption3 struct {
    APIKey shared.SchemeAPIKey `security:"scheme,type=apiKey,subtype=header"`
    
}

type DeleteAddonLinkersLinkerKeyValuesSecurity struct {
    Option1 *DeleteAddonLinkersLinkerKeyValuesSecurityOption1 `security:"option"`
    Option2 *DeleteAddonLinkersLinkerKeyValuesSecurityOption2 `security:"option"`
    Option3 *DeleteAddonLinkersLinkerKeyValuesSecurityOption3 `security:"option"`
    
}

type DeleteAddonLinkersLinkerKeyValuesRequest struct {
    PathParams DeleteAddonLinkersLinkerKeyValuesPathParams 
    Security DeleteAddonLinkersLinkerKeyValuesSecurity 
    
}

type DeleteAddonLinkersLinkerKeyValuesResponse struct {
    ContentType string 
    StatusCode int64 
    Error map[string]interface{} 
    
}

