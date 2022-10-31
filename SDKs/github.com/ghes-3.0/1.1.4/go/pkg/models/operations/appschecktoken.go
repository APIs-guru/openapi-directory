package operations

import (
"openapi/pkg/models/shared")

type AppsCheckTokenPathParams struct {
    ClientID string `pathParam:"style=simple,explode=false,name=client_id"`
    
}

type AppsCheckTokenRequestBody struct {
    AccessToken string `json:"access_token"`
    
}

type AppsCheckTokenRequest struct {
    PathParams AppsCheckTokenPathParams 
    Request *AppsCheckTokenRequestBody `request:"mediaType=application/json"`
    
}

type AppsCheckTokenResponse struct {
    ContentType string 
    StatusCode int64 
    Authorization *shared.Authorization 
    BasicError *shared.BasicError 
    ValidationError *shared.ValidationError 
    
}

