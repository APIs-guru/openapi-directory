package operations

import (
"openapi/pkg/models/shared")

type UpgradePlanPathParams struct {
    Platform string `pathParam:"style=simple,explode=false,name=platform"`
    
}

type UpgradePlanQueryParams struct {
    Lang *string `queryParam:"style=form,explode=true,name=lang"`
    
}

type UpgradePlanSecurity struct {
    AccountAuth shared.SchemeAccountAuth `security:"scheme,type=oauth2"`
    
}

type UpgradePlanRequest struct {
    PathParams UpgradePlanPathParams 
    QueryParams UpgradePlanQueryParams 
    Request shared.ItvUpgradePlanRequest `request:"mediaType=application/json"`
    Security UpgradePlanSecurity 
    
}

type UpgradePlanResponse struct {
    ContentType string 
    ServiceError *shared.ServiceError 
    StatusCode int64 
    
}

