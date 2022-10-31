package operations

import (
"openapi/pkg/models/shared")

type AccountGetSecurity struct {
    Jwt shared.SchemeJwt `security:"scheme,type=apiKey,subtype=header"`
    Project shared.SchemeProject `security:"scheme,type=apiKey,subtype=header"`
    
}

type AccountGetRequest struct {
    Security AccountGetSecurity 
    
}

type AccountGetResponse struct {
    ContentType string 
    StatusCode int64 
    User *shared.User 
    
}

