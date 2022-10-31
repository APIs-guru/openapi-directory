package operations

import (
"openapi/pkg/models/shared")

type GetUserEmailsSecurityOption1 struct {
    Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
    
}

type GetUserEmailsSecurityOption2 struct {
    Basic shared.SchemeBasic `security:"scheme,type=http,subtype=basic"`
    
}

type GetUserEmailsSecurityOption3 struct {
    APIKey shared.SchemeAPIKey `security:"scheme,type=apiKey,subtype=header"`
    
}

type GetUserEmailsSecurity struct {
    Option1 *GetUserEmailsSecurityOption1 `security:"option"`
    Option2 *GetUserEmailsSecurityOption2 `security:"option"`
    Option3 *GetUserEmailsSecurityOption3 `security:"option"`
    
}

type GetUserEmailsRequest struct {
    Security GetUserEmailsSecurity 
    
}

type GetUserEmailsResponse struct {
    ContentType string 
    StatusCode int64 
    Error map[string]interface{} 
    
}

