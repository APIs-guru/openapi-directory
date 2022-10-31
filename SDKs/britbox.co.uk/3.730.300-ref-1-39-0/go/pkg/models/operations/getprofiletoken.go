package operations

import (
"openapi/pkg/models/shared")

type GetProfileTokenQueryParams struct {
    Ff []shared.FeatureFlagsEnum `queryParam:"style=form,explode=false,name=ff"`
    Lang *string `queryParam:"style=form,explode=true,name=lang"`
    
}

type GetProfileTokenSecurity struct {
    AccountAuth shared.SchemeAccountAuth `security:"scheme,type=oauth2"`
    
}

type GetProfileTokenRequest struct {
    QueryParams GetProfileTokenQueryParams 
    Request shared.ProfileTokenRequest `request:"mediaType=application/json"`
    Security GetProfileTokenSecurity 
    
}

type GetProfileTokenResponse struct {
    AccessTokens []shared.AccessToken 
    ContentType string 
    ServiceError *shared.ServiceError 
    StatusCode int64 
    
}

