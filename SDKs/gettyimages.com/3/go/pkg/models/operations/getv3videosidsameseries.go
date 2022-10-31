package operations

import (
"openapi/pkg/models/shared")

type GetV3VideosIDSameSeriesPathParams struct {
    ID string `pathParam:"style=simple,explode=false,name=id"`
    
}

type GetV3VideosIDSameSeriesQueryParams struct {
    Fields []shared.BlendedVideosFieldValuesEnum `queryParam:"style=form,explode=false,name=fields"`
    Page *int32 `queryParam:"style=form,explode=true,name=page"`
    PageSize *int32 `queryParam:"style=form,explode=true,name=page_size"`
    
}

type GetV3VideosIDSameSeriesHeaders struct {
    AcceptLanguage *string `header:"style=simple,explode=false,name=Accept-Language"`
    
}

type GetV3VideosIDSameSeriesRequest struct {
    PathParams GetV3VideosIDSameSeriesPathParams 
    QueryParams GetV3VideosIDSameSeriesQueryParams 
    Headers GetV3VideosIDSameSeriesHeaders 
    
}

type GetV3VideosIDSameSeriesResponse struct {
    ContentType string 
    StatusCode int64 
    
}

