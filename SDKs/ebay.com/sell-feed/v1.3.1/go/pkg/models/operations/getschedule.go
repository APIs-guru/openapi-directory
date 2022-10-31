package operations

import (
"openapi/pkg/models/shared")

type GetSchedulePathParams struct {
    ScheduleID string `pathParam:"style=simple,explode=false,name=schedule_id"`
    
}

type GetScheduleSecurity struct {
    APIAuth shared.SchemeAPIAuth `security:"scheme,type=oauth2"`
    
}

type GetScheduleRequest struct {
    PathParams GetSchedulePathParams 
    Security GetScheduleSecurity 
    
}

type GetScheduleResponse struct {
    ContentType string 
    StatusCode int64 
    UserScheduleResponse *shared.UserScheduleResponse 
    
}

