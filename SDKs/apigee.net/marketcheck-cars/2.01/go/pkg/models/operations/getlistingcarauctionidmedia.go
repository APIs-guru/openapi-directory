package operations

import (
"openapi/pkg/models/shared")

type GetListingCarAuctionIDMediaPathParams struct {
    ID string `pathParam:"style=simple,explode=false,name=id"`
    
}

type GetListingCarAuctionIDMediaQueryParams struct {
    APIKey *string `queryParam:"style=form,explode=true,name=api_key"`
    AppendAPIKey *bool `queryParam:"style=form,explode=true,name=append_api_key"`
    
}

type GetListingCarAuctionIDMediaRequest struct {
    PathParams GetListingCarAuctionIDMediaPathParams 
    QueryParams GetListingCarAuctionIDMediaQueryParams 
    
}

type GetListingCarAuctionIDMediaResponse struct {
    ContentType string 
    Error *shared.Error 
    ListingMedia *shared.ListingMedia 
    StatusCode int64 
    
}

