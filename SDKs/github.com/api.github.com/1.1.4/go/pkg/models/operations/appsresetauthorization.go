package operations

import (
"openapi/pkg/models/shared")

type AppsResetAuthorizationPathParams struct {
    AccessToken string `pathParam:"style=simple,explode=false,name=access_token"`
    ClientID string `pathParam:"style=simple,explode=false,name=client_id"`
    
}

type AppsResetAuthorizationRequest struct {
    PathParams AppsResetAuthorizationPathParams 
    
}

type AppsResetAuthorizationResponse struct {
    ContentType string 
    StatusCode int64 
    Authorization *shared.Authorization 
    
}

