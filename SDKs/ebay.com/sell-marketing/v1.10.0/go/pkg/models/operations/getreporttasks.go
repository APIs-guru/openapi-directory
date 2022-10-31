package operations

import (
"openapi/pkg/models/shared")

type GetReportTasksQueryParams struct {
    Limit *string `queryParam:"style=form,explode=true,name=limit"`
    Offset *string `queryParam:"style=form,explode=true,name=offset"`
    ReportTaskStatuses *string `queryParam:"style=form,explode=true,name=report_task_statuses"`
    
}

type GetReportTasksSecurity struct {
    APIAuth shared.SchemeAPIAuth `security:"scheme,type=oauth2"`
    
}

type GetReportTasksRequest struct {
    QueryParams GetReportTasksQueryParams 
    Security GetReportTasksSecurity 
    
}

type GetReportTasksResponse struct {
    ContentType string 
    ReportTaskPagedCollection *shared.ReportTaskPagedCollection 
    StatusCode int64 
    
}

