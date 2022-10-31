package operations

import (
"openapi/pkg/models/shared")

type AccountCreateRequestBody struct {
    Email string `json:"email"`
    Name *string `json:"name,omitempty"`
    Password string `json:"password"`
    
}

type AccountCreateSecurity struct {
    Project shared.SchemeProject `security:"scheme,type=apiKey,subtype=header"`
    
}

type AccountCreateRequest struct {
    Request *AccountCreateRequestBody `request:"mediaType=application/json"`
    Security AccountCreateSecurity 
    
}

type AccountCreateResponse struct {
    ContentType string 
    StatusCode int64 
    User *shared.User 
    
}

