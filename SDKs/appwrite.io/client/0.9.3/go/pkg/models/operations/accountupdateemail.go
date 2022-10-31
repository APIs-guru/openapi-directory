package operations

import (
"openapi/pkg/models/shared")

type AccountUpdateEmailRequestBody struct {
    Email string `json:"email"`
    Password string `json:"password"`
    
}

type AccountUpdateEmailSecurity struct {
    Jwt shared.SchemeJwt `security:"scheme,type=apiKey,subtype=header"`
    Project shared.SchemeProject `security:"scheme,type=apiKey,subtype=header"`
    
}

type AccountUpdateEmailRequest struct {
    Request *AccountUpdateEmailRequestBody `request:"mediaType=application/json"`
    Security AccountUpdateEmailSecurity 
    
}

type AccountUpdateEmailResponse struct {
    ContentType string 
    StatusCode int64 
    User *shared.User 
    
}

