package operations

import (
"openapi/pkg/models/shared")

type LoginRequest struct {
    Request shared.LoginRequest `request:"mediaType=application/json"`
    
}

type LoginResponse struct {
    ContentType string 
    ErrorResponse *shared.ErrorResponse 
    LoginResponse *shared.LoginResponse 
    RadiusChallengeResponse *shared.RadiusChallengeResponse 
    StatusCode int64 
    
}

