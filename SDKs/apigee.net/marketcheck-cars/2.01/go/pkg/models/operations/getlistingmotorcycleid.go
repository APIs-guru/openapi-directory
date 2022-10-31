package operations

import (
"openapi/pkg/models/shared")

type GetListingMotorcycleIDPathParams struct {
    ID string `pathParam:"style=simple,explode=false,name=id"`
    
}

type GetListingMotorcycleIDQueryParams struct {
    APIKey *string `queryParam:"style=form,explode=true,name=api_key"`
    
}

type GetListingMotorcycleIDRequest struct {
    PathParams GetListingMotorcycleIDPathParams 
    QueryParams GetListingMotorcycleIDQueryParams 
    
}

type GetListingMotorcycleIDResponse struct {
    ContentType string 
    Error *shared.Error 
    MotorcycleListing *shared.MotorcycleListing 
    StatusCode int64 
    
}

