package operations

import (
"openapi/pkg/models/shared")

type RecoverUserNameRequest struct {
    Request shared.RecoverUserNameRequest `request:"mediaType=application/json"`
    
}

type RecoverUserNameResponse struct {
    ContentType string 
    ErrorResponse *shared.ErrorResponse 
    StatusCode int64 
    
}

