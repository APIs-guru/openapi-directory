package operations

import (
"openapi/pkg/models/shared")

type GetHookEventsSecurityOption1 struct {
    Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
    
}

type GetHookEventsSecurityOption2 struct {
    Basic shared.SchemeBasic `security:"scheme,type=http,subtype=basic"`
    
}

type GetHookEventsSecurityOption3 struct {
    APIKey shared.SchemeAPIKey `security:"scheme,type=apiKey,subtype=header"`
    
}

type GetHookEventsSecurity struct {
    Option1 *GetHookEventsSecurityOption1 `security:"option"`
    Option2 *GetHookEventsSecurityOption2 `security:"option"`
    Option3 *GetHookEventsSecurityOption3 `security:"option"`
    
}

type GetHookEventsRequest struct {
    Security GetHookEventsSecurity 
    
}

type GetHookEventsResponse struct {
    ContentType string 
    StatusCode int64 
    SubjectTypes *shared.SubjectTypes 
    
}

