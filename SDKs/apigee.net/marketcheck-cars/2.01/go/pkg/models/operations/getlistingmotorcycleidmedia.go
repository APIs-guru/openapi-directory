package operations

import (
"openapi/pkg/models/shared")

type GetListingMotorcycleIDMediaPathParams struct {
    ID string `pathParam:"style=simple,explode=false,name=id"`
    
}

type GetListingMotorcycleIDMediaQueryParams struct {
    APIKey *string `queryParam:"style=form,explode=true,name=api_key"`
    
}

type GetListingMotorcycleIDMediaRequest struct {
    PathParams GetListingMotorcycleIDMediaPathParams 
    QueryParams GetListingMotorcycleIDMediaQueryParams 
    
}

type GetListingMotorcycleIDMediaResponse struct {
    ContentType string 
    Error *shared.Error 
    ListingMedia *shared.ListingMedia 
    StatusCode int64 
    
}

