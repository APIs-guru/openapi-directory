package operations

import (
"openapi/pkg/models/shared")

type GetSchedulesQueryParams struct {
    FeedType string `queryParam:"style=form,explode=true,name=feed_type"`
    Limit *string `queryParam:"style=form,explode=true,name=limit"`
    Offset *string `queryParam:"style=form,explode=true,name=offset"`
    
}

type GetSchedulesSecurity struct {
    APIAuth shared.SchemeAPIAuth `security:"scheme,type=oauth2"`
    
}

type GetSchedulesRequest struct {
    QueryParams GetSchedulesQueryParams 
    Security GetSchedulesSecurity 
    
}

type GetSchedulesResponse struct {
    ContentType string 
    StatusCode int64 
    UserScheduleCollection *shared.UserScheduleCollection 
    
}

