package operations

import (
"openapi/pkg/models/shared")

type GetListingsByRegionListingsByRegionGetQueryParams struct {
    DaysBack *int64 `queryParam:"style=form,explode=true,name=daysBack"`
    Jwt string `queryParam:"style=form,explode=true,name=jwt"`
    ModelName string `queryParam:"style=form,explode=true,name=modelName"`
    NewCars *bool `queryParam:"style=form,explode=true,name=newCars"`
    Page *int64 `queryParam:"style=form,explode=true,name=page"`
    RegionName string `queryParam:"style=form,explode=true,name=regionName"`
    
}

type GetListingsByRegionListingsByRegionGetRequest struct {
    QueryParams GetListingsByRegionListingsByRegionGetQueryParams 
    
}

type GetListingsByRegionListingsByRegionGetResponse struct {
    ContentType string 
    HTTPValidationError *shared.HTTPValidationError 
    ListingResp *shared.ListingResp 
    StatusCode int64 
    
}

