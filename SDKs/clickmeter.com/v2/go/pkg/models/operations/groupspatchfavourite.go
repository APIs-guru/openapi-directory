package operations

import (
"openapi/pkg/models/shared")

type GroupsPatchFavouritePathParams struct {
    ID int64 `pathParam:"style=simple,explode=false,name=id"`
    
}

type GroupsPatchFavouriteRequest struct {
    PathParams GroupsPatchFavouritePathParams 
    
}

type GroupsPatchFavouriteResponse struct {
    APICoreResponsesEntityURISystemInt64 *shared.APICoreResponsesEntityURISystemInt64 
    Body []byte 
    ContentType string 
    StatusCode int64 
    
}

