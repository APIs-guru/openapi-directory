package operations

import (
"openapi/pkg/models/shared")

type UploadBoundarySecurityOption1 struct {
    APIKey shared.SchemeAPIKey `security:"scheme,type=apiKey,subtype=header"`
    
}

type UploadBoundarySecurityOption2 struct {
    Oauth2AuthorizationCode shared.SchemeOauth2AuthorizationCode `security:"scheme,type=oauth2"`
    
}

type UploadBoundarySecurity struct {
    Option1 *UploadBoundarySecurityOption1 `security:"option"`
    Option2 *UploadBoundarySecurityOption2 `security:"option"`
    
}

type UploadBoundaryRequest struct {
    Request *interface{} `request:"mediaType=application/json"`
    Security UploadBoundarySecurity 
    
}

type UploadBoundaryResponse struct {
    ContentType string 
    Error *shared.Error 
    Headers map[string][]string 
    StatusCode int64 
    UploadedBoundaryID *interface{} 
    
}

