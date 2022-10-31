package operations

import (
"openapi/pkg/models/shared")

type GetPlansQueryParams struct {
    Lang *string `queryParam:"style=form,explode=true,name=lang"`
    
}

type GetPlansRequest struct {
    QueryParams GetPlansQueryParams 
    
}

type GetPlansResponse struct {
    BtPlans *shared.BtPlans 
    ContentType string 
    ServiceError *shared.ServiceError 
    StatusCode int64 
    
}

