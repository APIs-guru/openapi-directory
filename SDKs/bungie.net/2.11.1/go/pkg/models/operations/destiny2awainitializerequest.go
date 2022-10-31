package operations

import (
"openapi/pkg/models/shared")

type Destiny2AwaInitializeRequestSecurity struct {
    Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
    
}

type Destiny2AwaInitializeRequestRequest struct {
    Security Destiny2AwaInitializeRequestSecurity 
    
}

type Destiny2AwaInitializeRequestResponse struct {
    Body []byte 
    ContentType string 
    StatusCode int64 
    
}

