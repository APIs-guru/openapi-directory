package operations

import (
"openapi/pkg/models/shared")

type SignOutQueryParams struct {
    Ff []shared.FeatureFlagsEnum `queryParam:"style=form,explode=false,name=ff"`
    Lang *string `queryParam:"style=form,explode=true,name=lang"`
    
}

type SignOutRequest struct {
    QueryParams SignOutQueryParams 
    
}

type SignOutResponse struct {
    ContentType string 
    ServiceError *shared.ServiceError 
    StatusCode int64 
    
}

