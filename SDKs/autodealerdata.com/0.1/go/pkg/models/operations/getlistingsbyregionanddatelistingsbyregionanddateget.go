package operations

import (
"time"
"openapi/pkg/models/shared")

type GetListingsByRegionAndDateListingsByRegionAndDateGetQueryParams struct {
    EndDate time.Time `queryParam:"style=form,explode=true,name=endDate"`
    Jwt string `queryParam:"style=form,explode=true,name=jwt"`
    ModelName string `queryParam:"style=form,explode=true,name=modelName"`
    NewCars *bool `queryParam:"style=form,explode=true,name=newCars"`
    Page *int64 `queryParam:"style=form,explode=true,name=page"`
    RegionName string `queryParam:"style=form,explode=true,name=regionName"`
    StartDate time.Time `queryParam:"style=form,explode=true,name=startDate"`
    
}

type GetListingsByRegionAndDateListingsByRegionAndDateGetRequest struct {
    QueryParams GetListingsByRegionAndDateListingsByRegionAndDateGetQueryParams 
    
}

type GetListingsByRegionAndDateListingsByRegionAndDateGetResponse struct {
    ContentType string 
    HTTPValidationError *shared.HTTPValidationError 
    ListingResp *shared.ListingResp 
    StatusCode int64 
    
}

