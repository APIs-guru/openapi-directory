package operations

import (
"openapi/pkg/models/shared")

type OauthAuthorizationsDeleteAuthorizationPathParams struct {
    AuthorizationID int64 `pathParam:"style=simple,explode=false,name=authorization_id"`
    
}

type OauthAuthorizationsDeleteAuthorizationRequest struct {
    PathParams OauthAuthorizationsDeleteAuthorizationPathParams 
    
}

type OauthAuthorizationsDeleteAuthorizationResponse struct {
    ContentType string 
    StatusCode int64 
    BasicError *shared.BasicError 
    
}

