package operations

import (
"openapi/pkg/models/shared")

type GetRegionBrandMarketShareGetRegionBrandMarketShareGetQueryParams struct {
    BrandName string `queryParam:"style=form,explode=true,name=brandName"`
    Jwt string `queryParam:"style=form,explode=true,name=jwt"`
    RegionName *string `queryParam:"style=form,explode=true,name=regionName"`
    
}

type GetRegionBrandMarketShareGetRegionBrandMarketShareGetRequest struct {
    QueryParams GetRegionBrandMarketShareGetRegionBrandMarketShareGetQueryParams 
    
}

type GetRegionBrandMarketShareGetRegionBrandMarketShareGetResponse struct {
    ContentType string 
    GenericResponse *shared.GenericResponse 
    HTTPValidationError *shared.HTTPValidationError 
    StatusCode int64 
    
}

