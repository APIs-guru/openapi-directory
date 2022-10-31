package operations

import (
"openapi/pkg/models/shared")

type CreateAccountRequest struct {
    Request *shared.CreateAccount `request:"mediaType=application/json"`
    
}

type CreateAccountResponse struct {
    BadRequestResponse *shared.BadRequestResponse 
    ContentType string 
    StatusCode int64 
    
}

