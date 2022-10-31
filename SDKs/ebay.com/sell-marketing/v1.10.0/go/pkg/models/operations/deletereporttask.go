package operations

import (
"openapi/pkg/models/shared")

type DeleteReportTaskPathParams struct {
    ReportTaskID string `pathParam:"style=simple,explode=false,name=report_task_id"`
    
}

type DeleteReportTaskSecurity struct {
    APIAuth shared.SchemeAPIAuth `security:"scheme,type=oauth2"`
    
}

type DeleteReportTaskRequest struct {
    PathParams DeleteReportTaskPathParams 
    Security DeleteReportTaskSecurity 
    
}

type DeleteReportTaskResponse struct {
    ContentType string 
    StatusCode int64 
    
}

