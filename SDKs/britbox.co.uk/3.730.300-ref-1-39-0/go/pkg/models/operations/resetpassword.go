package operations

import (
"openapi/pkg/models/shared")

type ResetPasswordQueryParams struct {
    Ff []shared.FeatureFlagsEnum `queryParam:"style=form,explode=false,name=ff"`
    Lang *string `queryParam:"style=form,explode=true,name=lang"`
    
}

type ResetPasswordRequest struct {
    QueryParams ResetPasswordQueryParams 
    Request shared.PasswordResetRequest `request:"mediaType=application/json"`
    
}

type ResetPasswordResponse struct {
    ContentType string 
    ServiceError *shared.ServiceError 
    StatusCode int64 
    
}

