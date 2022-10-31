package operations

import (
"openapi/pkg/models/shared")

type GetTasksQueryParams struct {
    DateRange *string `queryParam:"style=form,explode=true,name=date_range"`
    FeedType *string `queryParam:"style=form,explode=true,name=feed_type"`
    Limit *string `queryParam:"style=form,explode=true,name=limit"`
    LookBackDays *string `queryParam:"style=form,explode=true,name=look_back_days"`
    Offset *string `queryParam:"style=form,explode=true,name=offset"`
    ScheduleID *string `queryParam:"style=form,explode=true,name=schedule_id"`
    
}

type GetTasksSecurity struct {
    APIAuth shared.SchemeAPIAuth `security:"scheme,type=oauth2"`
    
}

type GetTasksRequest struct {
    QueryParams GetTasksQueryParams 
    Security GetTasksSecurity 
    
}

type GetTasksResponse struct {
    ContentType string 
    StatusCode int64 
    TaskCollection *shared.TaskCollection 
    
}

