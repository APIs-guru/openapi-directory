package operations

import (
"openapi/pkg/models/shared")

type ValidateResetPasswordTokenPathParams struct {
    Token string `pathParam:"style=simple,explode=false,name=token"`
    
}

type ValidateResetPasswordTokenRequest struct {
    PathParams ValidateResetPasswordTokenPathParams 
    
}

type ValidateResetPasswordTokenResponse struct {
    ContentType string 
    ErrorResponse *shared.ErrorResponse 
    ResetPasswordTokenValidateResponse *shared.ResetPasswordTokenValidateResponse 
    StatusCode int64 
    
}

