package operations

import (
"openapi/pkg/models/shared")

type FetchBoundaryByIDPathParams struct {
    BoundaryID string `pathParam:"style=simple,explode=false,name=boundaryId"`
    
}

type FetchBoundaryByIDSecurityOption1 struct {
    APIKey shared.SchemeAPIKey `security:"scheme,type=apiKey,subtype=header"`
    
}

type FetchBoundaryByIDSecurityOption2 struct {
    Oauth2AuthorizationCode shared.SchemeOauth2AuthorizationCode `security:"scheme,type=oauth2"`
    
}

type FetchBoundaryByIDSecurity struct {
    Option1 *FetchBoundaryByIDSecurityOption1 `security:"option"`
    Option2 *FetchBoundaryByIDSecurityOption2 `security:"option"`
    
}

type FetchBoundaryByIDRequest struct {
    PathParams FetchBoundaryByIDPathParams 
    Security FetchBoundaryByIDSecurity 
    
}

type FetchBoundaryByIDResponse struct {
    Boundary *interface{} 
    ContentType string 
    Error *shared.Error 
    Headers map[string][]string 
    StatusCode int64 
    
}

