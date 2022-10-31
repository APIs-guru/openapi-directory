package operations

import (
"openapi/pkg/models/shared")


type GetLiveStreamsSortOrderEnum string

const (
    GetLiveStreamsSortOrderEnumAsc GetLiveStreamsSortOrderEnum = "asc"
GetLiveStreamsSortOrderEnumDesc GetLiveStreamsSortOrderEnum = "desc"
)


type GetLiveStreamsQueryParams struct {
    CurrentPage *int64 `queryParam:"style=form,explode=true,name=currentPage"`
    Name *string `queryParam:"style=form,explode=true,name=name"`
    PageSize *int64 `queryParam:"style=form,explode=true,name=pageSize"`
    SortBy *string `queryParam:"style=form,explode=true,name=sortBy"`
    SortOrder *GetLiveStreamsSortOrderEnum `queryParam:"style=form,explode=true,name=sortOrder"`
    StreamKey *string `queryParam:"style=form,explode=true,name=streamKey"`
    
}

type GetLiveStreamsSecurity struct {
    BearerAuth shared.SchemeBearerAuth `security:"scheme,type=http,subtype=bearer"`
    
}

type GetLiveStreamsRequest struct {
    QueryParams GetLiveStreamsQueryParams 
    Security GetLiveStreamsSecurity 
    
}

type GetLiveStreamsResponse struct {
    ContentType string 
    StatusCode int64 
    LiveStreamListResponse *shared.LiveStreamListResponse 
    
}

