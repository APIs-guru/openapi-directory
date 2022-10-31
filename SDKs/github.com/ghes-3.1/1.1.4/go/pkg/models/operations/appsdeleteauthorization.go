package operations

import (
"openapi/pkg/models/shared")

type AppsDeleteAuthorizationPathParams struct {
    ClientID string `pathParam:"style=simple,explode=false,name=client_id"`
    
}

type AppsDeleteAuthorizationRequestBody struct {
    AccessToken *string `json:"access_token,omitempty"`
    
}

type AppsDeleteAuthorizationRequest struct {
    PathParams AppsDeleteAuthorizationPathParams 
    Request *AppsDeleteAuthorizationRequestBody `request:"mediaType=application/json"`
    
}

type AppsDeleteAuthorizationResponse struct {
    ContentType string 
    StatusCode int64 
    ValidationError *shared.ValidationError 
    
}

