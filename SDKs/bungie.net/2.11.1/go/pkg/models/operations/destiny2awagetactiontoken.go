package operations

import (
"openapi/pkg/models/shared")

type Destiny2AwaGetActionTokenPathParams struct {
    CorrelationID string `pathParam:"style=simple,explode=false,name=correlationId"`
    
}

type Destiny2AwaGetActionTokenSecurity struct {
    Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
    
}

type Destiny2AwaGetActionTokenRequest struct {
    PathParams Destiny2AwaGetActionTokenPathParams 
    Security Destiny2AwaGetActionTokenSecurity 
    
}

type Destiny2AwaGetActionTokenResponse struct {
    Body []byte 
    ContentType string 
    StatusCode int64 
    
}

