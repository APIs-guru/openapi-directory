package operations

import (
"openapi/pkg/models/shared")

type GetEePlansQueryParams struct {
    Lang *string `queryParam:"style=form,explode=true,name=lang"`
    
}

type GetEePlansRequest struct {
    QueryParams GetEePlansQueryParams 
    
}

type GetEePlansResponse struct {
    ContentType string 
    EePlans *shared.EePlans 
    ServiceError *shared.ServiceError 
    StatusCode int64 
    
}

