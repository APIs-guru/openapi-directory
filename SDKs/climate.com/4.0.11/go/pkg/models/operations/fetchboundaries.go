package operations

import (
"openapi/pkg/models/shared")

type FetchBoundariesSecurityOption1 struct {
    APIKey shared.SchemeAPIKey `security:"scheme,type=apiKey,subtype=header"`
    
}

type FetchBoundariesSecurityOption2 struct {
    Oauth2AuthorizationCode shared.SchemeOauth2AuthorizationCode `security:"scheme,type=oauth2"`
    
}

type FetchBoundariesSecurity struct {
    Option1 *FetchBoundariesSecurityOption1 `security:"option"`
    Option2 *FetchBoundariesSecurityOption2 `security:"option"`
    
}

type FetchBoundariesRequest struct {
    Request *shared.BoundariesQuery `request:"mediaType=application/json"`
    Security FetchBoundariesSecurity 
    
}

type FetchBoundariesResponse struct {
    Boundaries *interface{} 
    ContentType string 
    Error *shared.Error 
    Headers map[string][]string 
    StatusCode int64 
    
}

