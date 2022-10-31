package operations

import (
"openapi/pkg/models/shared")

type RequestOAuthClientPathParams struct {
    ClientID string `pathParam:"style=simple,explode=false,name=client_id"`
    
}

type RequestOAuthClientHeaders struct {
    XSdsAuthToken *string `header:"style=simple,explode=false,name=X-Sds-Auth-Token"`
    
}

type RequestOAuthClientRequest struct {
    PathParams RequestOAuthClientPathParams 
    Headers RequestOAuthClientHeaders 
    
}

type RequestOAuthClientResponse struct {
    ContentType string 
    ErrorResponse *shared.ErrorResponse 
    OAuthClient *shared.OAuthClient 
    StatusCode int64 
    
}

