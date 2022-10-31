package operations

import (
"openapi/pkg/models/shared")

type GetAnalyticsSessionsSessionIDEventsPathParams struct {
    SessionID string `pathParam:"style=simple,explode=false,name=sessionId"`
    
}

type GetAnalyticsSessionsSessionIDEventsQueryParams struct {
    CurrentPage *int64 `queryParam:"style=form,explode=true,name=currentPage"`
    PageSize *int64 `queryParam:"style=form,explode=true,name=pageSize"`
    
}

type GetAnalyticsSessionsSessionIDEventsSecurity struct {
    BearerAuth shared.SchemeBearerAuth `security:"scheme,type=http,subtype=bearer"`
    
}

type GetAnalyticsSessionsSessionIDEventsRequest struct {
    PathParams GetAnalyticsSessionsSessionIDEventsPathParams 
    QueryParams GetAnalyticsSessionsSessionIDEventsQueryParams 
    Security GetAnalyticsSessionsSessionIDEventsSecurity 
    
}

type GetAnalyticsSessionsSessionIDEventsResponse struct {
    ContentType string 
    StatusCode int64 
    NotFound *shared.NotFound 
    RawStatisticsListPlayerSessionEventsResponse *shared.RawStatisticsListPlayerSessionEventsResponse 
    
}

