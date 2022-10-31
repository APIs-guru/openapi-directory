package operations

import (
"openapi/pkg/models/shared")

type RemoveOAuthAuthorizationPathParams struct {
    AuthorizationID int64 `pathParam:"style=simple,explode=false,name=authorization_id"`
    ClientID string `pathParam:"style=simple,explode=false,name=client_id"`
    
}

type RemoveOAuthAuthorizationHeaders struct {
    XSdsAuthToken *string `header:"style=simple,explode=false,name=X-Sds-Auth-Token"`
    
}

type RemoveOAuthAuthorizationRequest struct {
    PathParams RemoveOAuthAuthorizationPathParams 
    Headers RemoveOAuthAuthorizationHeaders 
    
}

type RemoveOAuthAuthorizationResponse struct {
    ContentType string 
    ErrorResponse *shared.ErrorResponse 
    StatusCode int64 
    
}

