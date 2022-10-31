package operations

import (
"openapi/pkg/models/shared")

type GetScheduleTemplatePathParams struct {
    ScheduleTemplateID string `pathParam:"style=simple,explode=false,name=schedule_template_id"`
    
}

type GetScheduleTemplateSecurity struct {
    APIAuth shared.SchemeAPIAuth `security:"scheme,type=oauth2"`
    
}

type GetScheduleTemplateRequest struct {
    PathParams GetScheduleTemplatePathParams 
    Security GetScheduleTemplateSecurity 
    
}

type GetScheduleTemplateResponse struct {
    ContentType string 
    ScheduleTemplateResponse *shared.ScheduleTemplateResponse 
    StatusCode int64 
    
}

