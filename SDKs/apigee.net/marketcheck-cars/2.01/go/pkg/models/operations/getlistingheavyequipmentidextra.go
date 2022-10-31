package operations

import (
"openapi/pkg/models/shared")

type GetListingHeavyEquipmentIDExtraPathParams struct {
    ID string `pathParam:"style=simple,explode=false,name=id"`
    
}

type GetListingHeavyEquipmentIDExtraQueryParams struct {
    APIKey *string `queryParam:"style=form,explode=true,name=api_key"`
    
}

type GetListingHeavyEquipmentIDExtraRequest struct {
    PathParams GetListingHeavyEquipmentIDExtraPathParams 
    QueryParams GetListingHeavyEquipmentIDExtraQueryParams 
    
}

type GetListingHeavyEquipmentIDExtraResponse struct {
    ContentType string 
    Error *shared.Error 
    ListingExtraAttributes *shared.ListingExtraAttributes 
    StatusCode int64 
    
}

