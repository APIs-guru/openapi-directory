package operations

type DeleteScheduledTaskPathParams struct {
	DomainName      string `pathParam:"style=simple,explode=false,name=domainName"`
	ScheduledTaskID string `pathParam:"style=simple,explode=false,name=scheduledTaskId"`
}

type DeleteScheduledTaskQueryParams struct {
	DomainName      string `queryParam:"style=form,explode=true,name=domain_name"`
	ScheduledTaskID string `queryParam:"style=form,explode=true,name=scheduled_task_id"`
}

type DeleteScheduledTaskRequest struct {
	PathParams  DeleteScheduledTaskPathParams
	QueryParams DeleteScheduledTaskQueryParams
}

type DeleteScheduledTaskResponse struct {
	ContentType string
	StatusCode  int64
}
