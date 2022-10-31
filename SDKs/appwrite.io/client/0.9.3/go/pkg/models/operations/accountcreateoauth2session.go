package operations

import (
"openapi/pkg/models/shared")

type AccountCreateOAuth2SessionPathParams struct {
    Provider string `pathParam:"style=simple,explode=false,name=provider"`
    
}

type AccountCreateOAuth2SessionQueryParams struct {
    Failure *string `queryParam:"style=form,explode=true,name=failure"`
    Scopes []string `queryParam:"style=form,explode=true,name=scopes"`
    Success *string `queryParam:"style=form,explode=true,name=success"`
    
}

type AccountCreateOAuth2SessionSecurity struct {
    Project shared.SchemeProject `security:"scheme,type=apiKey,subtype=header"`
    
}

type AccountCreateOAuth2SessionRequest struct {
    PathParams AccountCreateOAuth2SessionPathParams 
    QueryParams AccountCreateOAuth2SessionQueryParams 
    Security AccountCreateOAuth2SessionSecurity 
    
}

type AccountCreateOAuth2SessionResponse struct {
    ContentType string 
    StatusCode int64 
    
}

