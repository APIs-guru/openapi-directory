package operations

import (
"openapi/pkg/models/shared")

type RefreshTokenQueryParams struct {
    Ff []shared.FeatureFlagsEnum `queryParam:"style=form,explode=false,name=ff"`
    Lang *string `queryParam:"style=form,explode=true,name=lang"`
    
}

type RefreshTokenRequest struct {
    QueryParams RefreshTokenQueryParams 
    Request shared.TokenRefreshRequest `request:"mediaType=application/json"`
    
}

type RefreshTokenResponse struct {
    AccessToken *shared.AccessToken 
    ContentType string 
    ServiceError *shared.ServiceError 
    StatusCode int64 
    
}

