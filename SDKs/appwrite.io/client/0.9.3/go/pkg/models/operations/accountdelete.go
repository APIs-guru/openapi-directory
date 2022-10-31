package operations

import (
"openapi/pkg/models/shared")

type AccountDeleteSecurity struct {
    Jwt shared.SchemeJwt `security:"scheme,type=apiKey,subtype=header"`
    Project shared.SchemeProject `security:"scheme,type=apiKey,subtype=header"`
    
}

type AccountDeleteRequest struct {
    Security AccountDeleteSecurity 
    
}

type AccountDeleteResponse struct {
    ContentType string 
    StatusCode int64 
    
}

