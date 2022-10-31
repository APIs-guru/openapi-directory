package operations

import (
"openapi/pkg/models/shared")

type AccountGetSessionPathParams struct {
    SessionID string `pathParam:"style=simple,explode=false,name=sessionId"`
    
}

type AccountGetSessionSecurity struct {
    Jwt shared.SchemeJwt `security:"scheme,type=apiKey,subtype=header"`
    Project shared.SchemeProject `security:"scheme,type=apiKey,subtype=header"`
    
}

type AccountGetSessionRequest struct {
    PathParams AccountGetSessionPathParams 
    Security AccountGetSessionSecurity 
    
}

type AccountGetSessionResponse struct {
    ContentType string 
    StatusCode int64 
    Session *shared.Session 
    
}

