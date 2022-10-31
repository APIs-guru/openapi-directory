package operations

import (
"time"
"openapi/pkg/models/shared")

type GetDealerSalesRegionDailySalesGetQueryParams struct {
    BrandName string `queryParam:"style=form,explode=true,name=brandName"`
    Day time.Time `queryParam:"style=form,explode=true,name=day"`
    Jwt string `queryParam:"style=form,explode=true,name=jwt"`
    RegionName string `queryParam:"style=form,explode=true,name=regionName"`
    
}

type GetDealerSalesRegionDailySalesGetRequest struct {
    QueryParams GetDealerSalesRegionDailySalesGetQueryParams 
    
}

type GetDealerSalesRegionDailySalesGetResponse struct {
    ContentType string 
    GenericResponse *shared.GenericResponse 
    HTTPValidationError *shared.HTTPValidationError 
    StatusCode int64 
    
}

