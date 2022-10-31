package operations

import (
"openapi/pkg/models/shared")

type DaysToSellDaysToSellGetQueryParams struct {
    BrandName string `queryParam:"style=form,explode=true,name=brandName"`
    Jwt string `queryParam:"style=form,explode=true,name=jwt"`
    RegionName *string `queryParam:"style=form,explode=true,name=regionName"`
    
}

type DaysToSellDaysToSellGetRequest struct {
    QueryParams DaysToSellDaysToSellGetQueryParams 
    
}

type DaysToSellDaysToSellGetResponse struct {
    ContentType string 
    GenericResponse *shared.GenericResponse 
    HTTPValidationError *shared.HTTPValidationError 
    StatusCode int64 
    
}

