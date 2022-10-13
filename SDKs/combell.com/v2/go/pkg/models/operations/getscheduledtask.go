package operations

import (
	"openapi/pkg/models/shared"
)

type GetScheduledTaskPathParams struct {
	DomainName      string `pathParam:"style=simple,explode=false,name=domainName"`
	ScheduledTaskID string `pathParam:"style=simple,explode=false,name=scheduledTaskId"`
}

type GetScheduledTaskQueryParams struct {
	DomainName      string `queryParam:"style=form,explode=true,name=domain_name"`
	ScheduledTaskID string `queryParam:"style=form,explode=true,name=scheduled_task_id"`
}

type GetScheduledTaskRequest struct {
	PathParams  GetScheduledTaskPathParams
	QueryParams GetScheduledTaskQueryParams
}

type GetScheduledTaskResponse struct {
	ContentType   string
	ScheduledTask *shared.ScheduledTask
	StatusCode    int64
}
