package operations

import (
"openapi/pkg/models/shared")

type GetAccountTokenByCodeQueryParams struct {
    Ff []shared.FeatureFlagsEnum `queryParam:"style=form,explode=false,name=ff"`
    Lang *string `queryParam:"style=form,explode=true,name=lang"`
    
}

type GetAccountTokenByCodeRequest struct {
    QueryParams GetAccountTokenByCodeQueryParams 
    Request shared.AccountTokenByCodeRequest `request:"mediaType=application/json"`
    
}

type GetAccountTokenByCodeResponse struct {
    AccessTokens []shared.AccessToken 
    ContentType string 
    ServiceError *shared.ServiceError 
    StatusCode int64 
    
}

