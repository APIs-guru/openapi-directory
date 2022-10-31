package operations

import (
"openapi/pkg/models/shared")

type DataPointsPatchFavouritePathParams struct {
    ID int64 `pathParam:"style=simple,explode=false,name=id"`
    
}

type DataPointsPatchFavouriteRequest struct {
    PathParams DataPointsPatchFavouritePathParams 
    
}

type DataPointsPatchFavouriteResponse struct {
    APICoreResponsesEntityURISystemInt64 *shared.APICoreResponsesEntityURISystemInt64 
    Body []byte 
    ContentType string 
    StatusCode int64 
    
}

