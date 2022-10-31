package operations

import (
"openapi/pkg/models/shared")

type GetReturnPolicyByNameQueryParams struct {
    MarketplaceID string `queryParam:"style=form,explode=true,name=marketplace_id"`
    Name string `queryParam:"style=form,explode=true,name=name"`
    
}

type GetReturnPolicyByNameSecurity struct {
    APIAuth shared.SchemeAPIAuth `security:"scheme,type=oauth2"`
    
}

type GetReturnPolicyByNameRequest struct {
    QueryParams GetReturnPolicyByNameQueryParams 
    Security GetReturnPolicyByNameSecurity 
    
}

type GetReturnPolicyByNameResponse struct {
    ContentType string 
    ReturnPolicy *shared.ReturnPolicy 
    StatusCode int64 
    
}

