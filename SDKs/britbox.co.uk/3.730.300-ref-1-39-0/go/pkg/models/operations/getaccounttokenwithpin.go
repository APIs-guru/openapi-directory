package operations

import (
"openapi/pkg/models/shared")

type GetAccountTokenWithPinQueryParams struct {
    Ff []shared.FeatureFlagsEnum `queryParam:"style=form,explode=false,name=ff"`
    Lang *string `queryParam:"style=form,explode=true,name=lang"`
    
}

type GetAccountTokenWithPinSecurity struct {
    AccountAuth shared.SchemeAccountAuth `security:"scheme,type=oauth2"`
    
}

type GetAccountTokenWithPinRequest struct {
    QueryParams GetAccountTokenWithPinQueryParams 
    Request shared.ItvPinAuthRequest `request:"mediaType=application/json"`
    Security GetAccountTokenWithPinSecurity 
    
}

type GetAccountTokenWithPinResponse struct {
    AccessTokens []shared.AccessToken 
    ContentType string 
    ServiceError *shared.ServiceError 
    StatusCode int64 
    
}

