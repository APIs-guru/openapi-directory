package operations

import (
"openapi/pkg/models/shared")

type GetV3ArtistsVideosQueryParams struct {
    ArtistName *string `queryParam:"style=form,explode=true,name=artist_name"`
    Fields []shared.ArtistsVideoSearchFieldValuesEnum `queryParam:"style=form,explode=false,name=fields"`
    Page *int32 `queryParam:"style=form,explode=true,name=page"`
    PageSize *int32 `queryParam:"style=form,explode=true,name=page_size"`
    
}

type GetV3ArtistsVideosHeaders struct {
    AcceptLanguage *string `header:"style=simple,explode=false,name=Accept-Language"`
    
}

type GetV3ArtistsVideosRequest struct {
    QueryParams GetV3ArtistsVideosQueryParams 
    Headers GetV3ArtistsVideosHeaders 
    
}

type GetV3ArtistsVideosResponse struct {
    ContentType string 
    StatusCode int64 
    
}

