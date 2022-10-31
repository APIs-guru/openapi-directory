package operations

import (
"openapi/pkg/models/shared")

type ResolveInvitationTokenQueryParams struct {
    Token string `queryParam:"style=form,explode=true,name=token"`
    
}

type ResolveInvitationTokenSecurity struct {
    Oauth shared.SchemeOauth `security:"scheme,type=oauth2"`
    
}

type ResolveInvitationTokenRequest struct {
    QueryParams ResolveInvitationTokenQueryParams 
    Security ResolveInvitationTokenSecurity 
    
}

type ResolveInvitationTokenResponse struct {
    Body []byte 
    ContentType string 
    Conversation *interface{} 
    StatusCode int64 
    
}

