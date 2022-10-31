package operations

import (
"openapi/pkg/models/shared")

type GetPlansIDPathParams struct {
    ID string `pathParam:"style=simple,explode=false,name=id"`
    
}

type GetPlansIDQueryParams struct {
    Device *string `queryParam:"style=form,explode=true,name=device"`
    Ff []shared.FeatureFlagsEnum `queryParam:"style=form,explode=false,name=ff"`
    Lang *string `queryParam:"style=form,explode=true,name=lang"`
    Segments []string `queryParam:"style=form,explode=false,name=segments"`
    Sub *string `queryParam:"style=form,explode=true,name=sub"`
    
}

type GetPlansIDRequest struct {
    PathParams GetPlansIDPathParams 
    QueryParams GetPlansIDQueryParams 
    
}

type GetPlansIDResponse struct {
    ContentType string 
    Plan *shared.Plan 
    ServiceError *shared.ServiceError 
    StatusCode int64 
    
}

