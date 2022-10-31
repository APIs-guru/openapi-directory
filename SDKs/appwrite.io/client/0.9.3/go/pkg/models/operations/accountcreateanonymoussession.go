package operations

import (
"openapi/pkg/models/shared")

type AccountCreateAnonymousSessionSecurity struct {
    Project shared.SchemeProject `security:"scheme,type=apiKey,subtype=header"`
    
}

type AccountCreateAnonymousSessionRequest struct {
    Security AccountCreateAnonymousSessionSecurity 
    
}

type AccountCreateAnonymousSessionResponse struct {
    ContentType string 
    StatusCode int64 
    Session *shared.Session 
    
}

