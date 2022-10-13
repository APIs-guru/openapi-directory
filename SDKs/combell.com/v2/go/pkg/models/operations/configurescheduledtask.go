package operations

import (
	"openapi/pkg/models/shared"
)

type ConfigureScheduledTaskPathParams struct {
	DomainName      string `pathParam:"style=simple,explode=false,name=domainName"`
	ScheduledTaskID string `pathParam:"style=simple,explode=false,name=scheduledTaskId"`
}

type ConfigureScheduledTaskQueryParams struct {
	DomainName      string `queryParam:"style=form,explode=true,name=domain_name"`
	ScheduledTaskID string `queryParam:"style=form,explode=true,name=scheduled_task_id"`
}

type ConfigureScheduledTaskRequest struct {
	PathParams  ConfigureScheduledTaskPathParams
	QueryParams ConfigureScheduledTaskQueryParams
	Request     *shared.ScheduledTask `request:"mediaType=application/json"`
}

type ConfigureScheduledTaskResponse struct {
	ContentType string
	StatusCode  int64
}
