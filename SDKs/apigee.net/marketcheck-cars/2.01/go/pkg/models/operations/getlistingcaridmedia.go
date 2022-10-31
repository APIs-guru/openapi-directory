package operations

import (
"openapi/pkg/models/shared")

type GetListingCarIDMediaPathParams struct {
    ID string `pathParam:"style=simple,explode=false,name=id"`
    
}

type GetListingCarIDMediaQueryParams struct {
    APIKey *string `queryParam:"style=form,explode=true,name=api_key"`
    AppendAPIKey *bool `queryParam:"style=form,explode=true,name=append_api_key"`
    
}

type GetListingCarIDMediaRequest struct {
    PathParams GetListingCarIDMediaPathParams 
    QueryParams GetListingCarIDMediaQueryParams 
    
}

type GetListingCarIDMediaResponse struct {
    ContentType string 
    Error *shared.Error 
    ListingMedia *shared.ListingMedia 
    StatusCode int64 
    
}

