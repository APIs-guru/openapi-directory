package operations

import (
"openapi/pkg/models/shared")

type PostAddonLinkersLinkerKeyValuesPathParams struct {
    LinkerKey string `pathParam:"style=simple,explode=false,name=linker_key"`
    
}

type PostAddonLinkersLinkerKeyValuesSecurityOption1 struct {
    Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
    
}

type PostAddonLinkersLinkerKeyValuesSecurityOption2 struct {
    Basic shared.SchemeBasic `security:"scheme,type=http,subtype=basic"`
    
}

type PostAddonLinkersLinkerKeyValuesSecurityOption3 struct {
    APIKey shared.SchemeAPIKey `security:"scheme,type=apiKey,subtype=header"`
    
}

type PostAddonLinkersLinkerKeyValuesSecurity struct {
    Option1 *PostAddonLinkersLinkerKeyValuesSecurityOption1 `security:"option"`
    Option2 *PostAddonLinkersLinkerKeyValuesSecurityOption2 `security:"option"`
    Option3 *PostAddonLinkersLinkerKeyValuesSecurityOption3 `security:"option"`
    
}

type PostAddonLinkersLinkerKeyValuesRequest struct {
    PathParams PostAddonLinkersLinkerKeyValuesPathParams 
    Security PostAddonLinkersLinkerKeyValuesSecurity 
    
}

type PostAddonLinkersLinkerKeyValuesResponse struct {
    ContentType string 
    StatusCode int64 
    Error map[string]interface{} 
    
}

