package operations

import (
"openapi/pkg/models/shared")

type OauthAuthorizationsCheckAuthorizationPathParams struct {
    AccessToken string `pathParam:"style=simple,explode=false,name=access_token"`
    ClientID string `pathParam:"style=simple,explode=false,name=client_id"`
    
}

type OauthAuthorizationsCheckAuthorizationRequest struct {
    PathParams OauthAuthorizationsCheckAuthorizationPathParams 
    
}

type OauthAuthorizationsCheckAuthorizationResponse struct {
    ContentType string 
    StatusCode int64 
    AuthorizationWithUser *shared.AuthorizationWithUser 
    
}

