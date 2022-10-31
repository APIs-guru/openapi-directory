package operations

import (
"openapi/pkg/models/shared")

type PostRequestPasswordResetSample struct {
    Email *string `json:"email,omitempty"`
    
}

type PostRequestPasswordResetRequest struct {
    Request PostRequestPasswordResetSample `request:"mediaType=application/json"`
    
}

type PostRequestPasswordResetResponse struct {
    ContentType string 
    StatusCode int64 
    InvalidToken *shared.InvalidToken 
    RequestPasswordResetResponse *shared.RequestPasswordResetResponse 
    
}

