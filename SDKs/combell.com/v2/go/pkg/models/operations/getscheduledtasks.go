package operations

import (
	"openapi/pkg/models/shared"
)

type GetScheduledTasksPathParams struct {
	DomainName string `pathParam:"style=simple,explode=false,name=domainName"`
}

type GetScheduledTasksQueryParams struct {
	DomainName string `queryParam:"style=form,explode=true,name=domain_name"`
}

type GetScheduledTasksRequest struct {
	PathParams  GetScheduledTasksPathParams
	QueryParams GetScheduledTasksQueryParams
}

type GetScheduledTasksResponse struct {
	ContentType    string
	ScheduledTasks []shared.ScheduledTask
	StatusCode     int64
}
