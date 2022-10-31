package operations

import (
"openapi/pkg/models/shared")

type GetCustomerServiceMetricTasksQueryParams struct {
    DateRange *string `queryParam:"style=form,explode=true,name=date_range"`
    FeedType *string `queryParam:"style=form,explode=true,name=feed_type"`
    Limit *string `queryParam:"style=form,explode=true,name=limit"`
    LookBackDays *string `queryParam:"style=form,explode=true,name=look_back_days"`
    Offset *string `queryParam:"style=form,explode=true,name=offset"`
    
}

type GetCustomerServiceMetricTasksSecurity struct {
    APIAuth shared.SchemeAPIAuth `security:"scheme,type=oauth2"`
    
}

type GetCustomerServiceMetricTasksRequest struct {
    QueryParams GetCustomerServiceMetricTasksQueryParams 
    Security GetCustomerServiceMetricTasksSecurity 
    
}

type GetCustomerServiceMetricTasksResponse struct {
    ContentType string 
    CustomerServiceMetricTaskCollection *shared.CustomerServiceMetricTaskCollection 
    StatusCode int64 
    
}

