package operations

import (
"openapi/pkg/models/shared")

type PostSigninRequest struct {
    Request *shared.Signin `request:"mediaType=application/json"`
    
}

type PostSigninResponse struct {
    ContentType string 
    StatusCode int64 
    InvalidToken *shared.InvalidToken 
    KeyFailure *shared.KeyFailure 
    SigninResponse *shared.SigninResponse 
    
}

