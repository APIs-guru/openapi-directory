package operations

import (
	"openapi/pkg/models/shared"
)

type GetReportTaskPathParams struct {
	ReportTaskID string `pathParam:"style=simple,explode=false,name=report_task_id"`
}

type GetReportTaskSecurity struct {
	APIAuth shared.SchemeAPIAuth `security:"scheme,type=oauth2"`
}

type GetReportTaskRequest struct {
	PathParams GetReportTaskPathParams
	Security   GetReportTaskSecurity
}

type GetReportTaskResponse struct {
	ContentType string
	ReportTask  *shared.ReportTask
	StatusCode  int64
}
