package operations

import (
"openapi/pkg/models/shared")

type AccountCreateSessionRequestBody struct {
    Email string `json:"email"`
    Password string `json:"password"`
    
}

type AccountCreateSessionSecurity struct {
    Project shared.SchemeProject `security:"scheme,type=apiKey,subtype=header"`
    
}

type AccountCreateSessionRequest struct {
    Request *AccountCreateSessionRequestBody `request:"mediaType=application/json"`
    Security AccountCreateSessionSecurity 
    
}

type AccountCreateSessionResponse struct {
    ContentType string 
    StatusCode int64 
    Session *shared.Session 
    
}

