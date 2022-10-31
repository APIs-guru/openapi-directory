package operations

import (
"openapi/pkg/models/shared")

type GetAnalyticsVideosVideoIDPathParams struct {
    VideoID string `pathParam:"style=simple,explode=false,name=videoId"`
    
}

type GetAnalyticsVideosVideoIDQueryParams struct {
    CurrentPage *int64 `queryParam:"style=form,explode=true,name=currentPage"`
    Metadata []string `queryParam:"style=form,explode=true,name=metadata"`
    PageSize *int64 `queryParam:"style=form,explode=true,name=pageSize"`
    Period *string `queryParam:"style=form,explode=true,name=period"`
    
}

type GetAnalyticsVideosVideoIDSecurity struct {
    BearerAuth shared.SchemeBearerAuth `security:"scheme,type=http,subtype=bearer"`
    
}

type GetAnalyticsVideosVideoIDRequest struct {
    PathParams GetAnalyticsVideosVideoIDPathParams 
    QueryParams GetAnalyticsVideosVideoIDQueryParams 
    Security GetAnalyticsVideosVideoIDSecurity 
    
}

type GetAnalyticsVideosVideoIDResponse struct {
    ContentType string 
    StatusCode int64 
    NotFound *shared.NotFound 
    RawStatisticsListSessionsResponse *shared.RawStatisticsListSessionsResponse 
    
}

