package operations

import (
"openapi/pkg/models/shared")

type RequestPasswordResetRequest struct {
    Request shared.ResetPasswordRequest `request:"mediaType=application/json"`
    
}

type RequestPasswordResetResponse struct {
    ContentType string 
    ErrorResponse *shared.ErrorResponse 
    StatusCode int64 
    
}

