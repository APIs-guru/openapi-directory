package operations

import (
"openapi/pkg/models/shared")

type GetBillingHistoryPathParams struct {
    Platform string `pathParam:"style=simple,explode=false,name=platform"`
    
}

type GetBillingHistoryQueryParams struct {
    Lang *string `queryParam:"style=form,explode=true,name=lang"`
    
}

type GetBillingHistorySecurity struct {
    AccountAuth shared.SchemeAccountAuth `security:"scheme,type=oauth2"`
    
}

type GetBillingHistoryRequest struct {
    PathParams GetBillingHistoryPathParams 
    QueryParams GetBillingHistoryQueryParams 
    Request shared.ItvBillingHistoryRequest `request:"mediaType=application/json"`
    Security GetBillingHistorySecurity 
    
}

type GetBillingHistoryResponse struct {
    ContentType string 
    ItvBillingHistory *shared.ItvBillingHistory 
    ServiceError *shared.ServiceError 
    StatusCode int64 
    
}

