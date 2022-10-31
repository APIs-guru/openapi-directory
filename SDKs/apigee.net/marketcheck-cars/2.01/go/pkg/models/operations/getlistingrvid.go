package operations

import (
"openapi/pkg/models/shared")

type GetListingRvIDPathParams struct {
    ID string `pathParam:"style=simple,explode=false,name=id"`
    
}

type GetListingRvIDQueryParams struct {
    APIKey *string `queryParam:"style=form,explode=true,name=api_key"`
    
}

type GetListingRvIDRequest struct {
    PathParams GetListingRvIDPathParams 
    QueryParams GetListingRvIDQueryParams 
    
}

type GetListingRvIDResponse struct {
    ContentType string 
    Error *shared.Error 
    RvListing *shared.RvListing 
    StatusCode int64 
    
}

