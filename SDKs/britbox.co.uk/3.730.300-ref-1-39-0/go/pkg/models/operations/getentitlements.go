package operations

import (
"openapi/pkg/models/shared")

type GetEntitlementsQueryParams struct {
    Ff []shared.FeatureFlagsEnum `queryParam:"style=form,explode=false,name=ff"`
    Lang *string `queryParam:"style=form,explode=true,name=lang"`
    
}

type GetEntitlementsSecurity struct {
    AccountAuth shared.SchemeAccountAuth `security:"scheme,type=oauth2"`
    
}

type GetEntitlementsRequest struct {
    QueryParams GetEntitlementsQueryParams 
    Security GetEntitlementsSecurity 
    
}

type GetEntitlementsResponse struct {
    ContentType string 
    Entitlements []shared.Entitlement 
    ServiceError *shared.ServiceError 
    StatusCode int64 
    
}

