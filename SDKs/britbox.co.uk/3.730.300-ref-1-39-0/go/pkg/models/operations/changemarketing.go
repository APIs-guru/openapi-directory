package operations

import (
"openapi/pkg/models/shared")

type ChangeMarketingQueryParams struct {
    Ff []shared.FeatureFlagsEnum `queryParam:"style=form,explode=false,name=ff"`
    Lang *string `queryParam:"style=form,explode=true,name=lang"`
    
}

type ChangeMarketingSecurity struct {
    AccountAuth shared.SchemeAccountAuth `security:"scheme,type=oauth2"`
    
}

type ChangeMarketingRequest struct {
    QueryParams ChangeMarketingQueryParams 
    Request shared.ItvChangeMarketingRequest `request:"mediaType=application/json"`
    Security ChangeMarketingSecurity 
    
}

type ChangeMarketingResponse struct {
    ContentType string 
    ServiceError *shared.ServiceError 
    StatusCode int64 
    
}

