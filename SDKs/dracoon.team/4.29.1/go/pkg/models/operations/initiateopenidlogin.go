package operations

import (
"openapi/pkg/models/shared")

type InitiateOpenIDLoginQueryParams struct {
    Issuer string `queryParam:"style=form,explode=true,name=issuer"`
    Language string `queryParam:"style=form,explode=true,name=language"`
    RedirectURI string `queryParam:"style=form,explode=true,name=redirect_uri"`
    Test bool `queryParam:"style=form,explode=true,name=test"`
    
}

type InitiateOpenIDLoginRequest struct {
    QueryParams InitiateOpenIDLoginQueryParams 
    
}

type InitiateOpenIDLoginResponse struct {
    ContentType string 
    ErrorResponse *shared.ErrorResponse 
    StatusCode int64 
    
}

