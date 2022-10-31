package operations

import (
"openapi/pkg/models/shared")

type GetItvProfileTokenQueryParams struct {
    Lang *string `queryParam:"style=form,explode=true,name=lang"`
    
}

type GetItvProfileTokenSecurity struct {
    AccountAuth shared.SchemeAccountAuth `security:"scheme,type=oauth2"`
    
}

type GetItvProfileTokenRequest struct {
    QueryParams GetItvProfileTokenQueryParams 
    Request shared.ItvProfileTokenRequest `request:"mediaType=application/json"`
    Security GetItvProfileTokenSecurity 
    
}

type GetItvProfileTokenResponse struct {
    ContentType string 
    ItvProfileToken *shared.ItvProfileToken 
    ServiceError *shared.ServiceError 
    StatusCode int64 
    
}

