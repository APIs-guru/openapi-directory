package operations

import (
"openapi/pkg/models/shared")

type GetListingMotorcycleIDExtraPathParams struct {
    ID string `pathParam:"style=simple,explode=false,name=id"`
    
}

type GetListingMotorcycleIDExtraQueryParams struct {
    APIKey *string `queryParam:"style=form,explode=true,name=api_key"`
    
}

type GetListingMotorcycleIDExtraRequest struct {
    PathParams GetListingMotorcycleIDExtraPathParams 
    QueryParams GetListingMotorcycleIDExtraQueryParams 
    
}

type GetListingMotorcycleIDExtraResponse struct {
    ContentType string 
    Error *shared.Error 
    ListingExtraAttributes *shared.ListingExtraAttributes 
    StatusCode int64 
    
}

