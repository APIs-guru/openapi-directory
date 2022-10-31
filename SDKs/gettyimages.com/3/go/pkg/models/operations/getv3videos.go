package operations

import (
"openapi/pkg/models/shared")

type GetV3VideosQueryParams struct {
    Fields []shared.VideoDetailFieldValuesEnum `queryParam:"style=form,explode=false,name=fields"`
    Ids []string `queryParam:"style=form,explode=false,name=ids"`
    
}

type GetV3VideosHeaders struct {
    AcceptLanguage *string `header:"style=simple,explode=false,name=Accept-Language"`
    
}

type GetV3VideosRequest struct {
    QueryParams GetV3VideosQueryParams 
    Headers GetV3VideosHeaders 
    
}

type GetV3VideosResponse struct {
    ContentType string 
    StatusCode int64 
    
}

