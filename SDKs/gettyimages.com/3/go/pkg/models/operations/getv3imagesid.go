package operations

import (
"openapi/pkg/models/shared")

type GetV3ImagesIDPathParams struct {
    ID string `pathParam:"style=simple,explode=false,name=id"`
    
}

type GetV3ImagesIDQueryParams struct {
    Fields []shared.ImageDetailFieldValuesEnum `queryParam:"style=form,explode=false,name=fields"`
    
}

type GetV3ImagesIDHeaders struct {
    AcceptLanguage *string `header:"style=simple,explode=false,name=Accept-Language"`
    
}

type GetV3ImagesIDRequest struct {
    PathParams GetV3ImagesIDPathParams 
    QueryParams GetV3ImagesIDQueryParams 
    Headers GetV3ImagesIDHeaders 
    
}

type GetV3ImagesIDResponse struct {
    ContentType string 
    ImagesDetailResults *shared.ImagesDetailResults 
    StatusCode int64 
    
}

