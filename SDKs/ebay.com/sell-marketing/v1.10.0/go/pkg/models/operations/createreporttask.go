package operations

import (
"openapi/pkg/models/shared")

type CreateReportTaskSecurity struct {
    APIAuth shared.SchemeAPIAuth `security:"scheme,type=oauth2"`
    
}

type CreateReportTaskRequest struct {
    Request shared.CreateReportTask `request:"mediaType=application/json"`
    Security CreateReportTaskSecurity 
    
}

type CreateReportTaskResponse struct {
    ContentType string 
    StatusCode int64 
    
}

