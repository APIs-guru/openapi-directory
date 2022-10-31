package operations

import (
"openapi/pkg/models/shared")

type AccountCreateVerificationRequestBody struct {
    URL string `json:"url"`
    
}

type AccountCreateVerificationSecurity struct {
    Jwt shared.SchemeJwt `security:"scheme,type=apiKey,subtype=header"`
    Project shared.SchemeProject `security:"scheme,type=apiKey,subtype=header"`
    
}

type AccountCreateVerificationRequest struct {
    Request *AccountCreateVerificationRequestBody `request:"mediaType=application/json"`
    Security AccountCreateVerificationSecurity 
    
}

type AccountCreateVerificationResponse struct {
    ContentType string 
    StatusCode int64 
    Token *shared.Token 
    
}

