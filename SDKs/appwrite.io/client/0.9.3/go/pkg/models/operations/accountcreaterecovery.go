package operations

import (
"openapi/pkg/models/shared")

type AccountCreateRecoveryRequestBody struct {
    Email string `json:"email"`
    URL string `json:"url"`
    
}

type AccountCreateRecoverySecurity struct {
    Jwt shared.SchemeJwt `security:"scheme,type=apiKey,subtype=header"`
    Project shared.SchemeProject `security:"scheme,type=apiKey,subtype=header"`
    
}

type AccountCreateRecoveryRequest struct {
    Request *AccountCreateRecoveryRequestBody `request:"mediaType=application/json"`
    Security AccountCreateRecoverySecurity 
    
}

type AccountCreateRecoveryResponse struct {
    ContentType string 
    StatusCode int64 
    Token *shared.Token 
    
}

