package operations

import (
"openapi/pkg/models/shared")

type CheckPreviousEntitlementsQueryParams struct {
    Lang *string `queryParam:"style=form,explode=true,name=lang"`
    
}

type CheckPreviousEntitlementsSecurity struct {
    AccountAuth shared.SchemeAccountAuth `security:"scheme,type=oauth2"`
    
}

type CheckPreviousEntitlementsRequest struct {
    QueryParams CheckPreviousEntitlementsQueryParams 
    Security CheckPreviousEntitlementsSecurity 
    
}

type CheckPreviousEntitlementsResponse struct {
    ContentType string 
    ItvHadEntitlement *shared.ItvHadEntitlement 
    ServiceError *shared.ServiceError 
    StatusCode int64 
    
}

