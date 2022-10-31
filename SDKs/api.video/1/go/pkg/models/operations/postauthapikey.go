package operations

import (
"openapi/pkg/models/shared")

type PostAuthAPIKeyRequest struct {
    Request *shared.AuthenticatePayload `request:"mediaType=application/json"`
    
}

type PostAuthAPIKeyResponse struct {
    ContentType string 
    StatusCode int64 
    AccessToken *shared.AccessToken 
    BadRequest *shared.BadRequest 
    
}

