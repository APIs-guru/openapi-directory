package operations

import (
"openapi/pkg/models/shared")

type GetListingHeavyEquipmentIDPathParams struct {
    ID string `pathParam:"style=simple,explode=false,name=id"`
    
}

type GetListingHeavyEquipmentIDQueryParams struct {
    APIKey *string `queryParam:"style=form,explode=true,name=api_key"`
    
}

type GetListingHeavyEquipmentIDRequest struct {
    PathParams GetListingHeavyEquipmentIDPathParams 
    QueryParams GetListingHeavyEquipmentIDQueryParams 
    
}

type GetListingHeavyEquipmentIDResponse struct {
    ContentType string 
    Error *shared.Error 
    HeavyEquipmentsListing *shared.HeavyEquipmentsListing 
    StatusCode int64 
    
}

