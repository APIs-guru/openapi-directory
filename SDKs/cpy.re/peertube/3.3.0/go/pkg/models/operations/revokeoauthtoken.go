package operations

import (
"openapi/pkg/models/shared")

type RevokeOAuthTokenSecurity struct {
    OAuth2 shared.SchemeOAuth2 `security:"scheme,type=oauth2"`
    
}

type RevokeOAuthTokenRequest struct {
    Security RevokeOAuthTokenSecurity 
    
}

type RevokeOAuthTokenResponse struct {
    ContentType string 
    StatusCode int64 
    
}

