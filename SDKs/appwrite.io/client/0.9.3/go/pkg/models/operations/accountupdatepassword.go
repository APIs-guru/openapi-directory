package operations

import (
"openapi/pkg/models/shared")

type AccountUpdatePasswordRequestBody struct {
    OldPassword *string `json:"oldPassword,omitempty"`
    Password string `json:"password"`
    
}

type AccountUpdatePasswordSecurity struct {
    Jwt shared.SchemeJwt `security:"scheme,type=apiKey,subtype=header"`
    Project shared.SchemeProject `security:"scheme,type=apiKey,subtype=header"`
    
}

type AccountUpdatePasswordRequest struct {
    Request *AccountUpdatePasswordRequestBody `request:"mediaType=application/json"`
    Security AccountUpdatePasswordSecurity 
    
}

type AccountUpdatePasswordResponse struct {
    ContentType string 
    StatusCode int64 
    User *shared.User 
    
}

