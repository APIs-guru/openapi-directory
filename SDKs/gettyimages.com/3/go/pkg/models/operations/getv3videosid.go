package operations

import (
"openapi/pkg/models/shared")

type GetV3VideosIDPathParams struct {
    ID string `pathParam:"style=simple,explode=false,name=id"`
    
}

type GetV3VideosIDQueryParams struct {
    Fields []shared.VideoDetailFieldValuesEnum `queryParam:"style=form,explode=false,name=fields"`
    
}

type GetV3VideosIDHeaders struct {
    AcceptLanguage *string `header:"style=simple,explode=false,name=Accept-Language"`
    
}

type GetV3VideosIDRequest struct {
    PathParams GetV3VideosIDPathParams 
    QueryParams GetV3VideosIDQueryParams 
    Headers GetV3VideosIDHeaders 
    
}

type GetV3VideosIDResponse struct {
    ContentType string 
    StatusCode int64 
    
}

