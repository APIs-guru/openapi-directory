package operations

import (
"openapi/pkg/models/shared")

type GetPlanPathParams struct {
    ID string `pathParam:"style=simple,explode=false,name=id"`
    
}

type GetPlanQueryParams struct {
    Lang *string `queryParam:"style=form,explode=true,name=lang"`
    
}

type GetPlanRequest struct {
    PathParams GetPlanPathParams 
    QueryParams GetPlanQueryParams 
    
}

type GetPlanResponse struct {
    ContentType string 
    EePlanListItem *shared.EePlanListItem 
    ServiceError *shared.ServiceError 
    StatusCode int64 
    
}

