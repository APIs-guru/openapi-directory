package operations

import (
"openapi/pkg/models/shared")

type UsersAddEmailForAuthenticatedRequestBody1 struct {
    Emails []string `json:"emails"`
    
}

type UsersAddEmailForAuthenticatedRequest struct {
    Request *interface{} `request:"mediaType=application/json"`
    
}

type UsersAddEmailForAuthenticatedResponse struct {
    ContentType string 
    StatusCode int64 
    BasicError *shared.BasicError 
    Emails []shared.Email 
    ValidationError *shared.ValidationError 
    
}

