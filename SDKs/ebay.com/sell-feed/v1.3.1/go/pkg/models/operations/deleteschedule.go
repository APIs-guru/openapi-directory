package operations

import (
"openapi/pkg/models/shared")

type DeleteSchedulePathParams struct {
    ScheduleID string `pathParam:"style=simple,explode=false,name=schedule_id"`
    
}

type DeleteScheduleSecurity struct {
    APIAuth shared.SchemeAPIAuth `security:"scheme,type=oauth2"`
    
}

type DeleteScheduleRequest struct {
    PathParams DeleteSchedulePathParams 
    Security DeleteScheduleSecurity 
    
}

type DeleteScheduleResponse struct {
    ContentType string 
    StatusCode int64 
    
}

