package operations

import (
"openapi/pkg/models/shared")

type GetItvRokuPlansQueryParams struct {
    Lang *string `queryParam:"style=form,explode=true,name=lang"`
    
}

type GetItvRokuPlansRequest struct {
    QueryParams GetItvRokuPlansQueryParams 
    
}

type GetItvRokuPlansResponse struct {
    ContentType string 
    RokuPlans *shared.RokuPlans 
    ServiceError *shared.ServiceError 
    StatusCode int64 
    
}

