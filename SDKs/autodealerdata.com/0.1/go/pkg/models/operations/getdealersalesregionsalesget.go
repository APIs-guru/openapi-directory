package operations

import (
"time"
"openapi/pkg/models/shared")

type GetDealerSalesRegionSalesGetQueryParams struct {
    BrandName string `queryParam:"style=form,explode=true,name=brandName"`
    Jwt string `queryParam:"style=form,explode=true,name=jwt"`
    Month time.Time `queryParam:"style=form,explode=true,name=month"`
    RegionName string `queryParam:"style=form,explode=true,name=regionName"`
    
}

type GetDealerSalesRegionSalesGetRequest struct {
    QueryParams GetDealerSalesRegionSalesGetQueryParams 
    
}

type GetDealerSalesRegionSalesGetResponse struct {
    ContentType string 
    GenericResponse *shared.GenericResponse 
    HTTPValidationError *shared.HTTPValidationError 
    StatusCode int64 
    
}

