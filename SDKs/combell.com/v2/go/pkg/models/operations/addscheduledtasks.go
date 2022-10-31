package operations

import (
	"openapi/pkg/models/shared"
)

type AddScheduledTasksPathParams struct {
	DomainName string `pathParam:"style=simple,explode=false,name=domainName"`
}

type AddScheduledTasksQueryParams struct {
	DomainName string `queryParam:"style=form,explode=true,name=domain_name"`
}

type AddScheduledTasksRequest struct {
	PathParams  AddScheduledTasksPathParams
	QueryParams AddScheduledTasksQueryParams
	Request     *shared.ScheduledTask `request:"mediaType=application/json"`
}

type AddScheduledTasksResponse struct {
	ContentType string
	Headers     map[string][]string
	StatusCode  int64
}
