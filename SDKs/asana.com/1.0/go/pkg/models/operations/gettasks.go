package operations

import (
	"openapi/pkg/models/shared"
	"time"
)

type GetTasksQueryParams struct {
	Assignee       *string    `queryParam:"style=form,explode=true,name=assignee"`
	CompletedSince *time.Time `queryParam:"style=form,explode=true,name=completed_since"`
	Limit          *int64     `queryParam:"style=form,explode=true,name=limit"`
	ModifiedSince  *time.Time `queryParam:"style=form,explode=true,name=modified_since"`
	Offset         *string    `queryParam:"style=form,explode=true,name=offset"`
	OptFields      []string   `queryParam:"style=form,explode=false,name=opt_fields"`
	OptPretty      *bool      `queryParam:"style=form,explode=true,name=opt_pretty"`
	Project        *string    `queryParam:"style=form,explode=true,name=project"`
	Section        *string    `queryParam:"style=form,explode=true,name=section"`
	Workspace      *string    `queryParam:"style=form,explode=true,name=workspace"`
}

type GetTasksRequest struct {
	QueryParams GetTasksQueryParams
}

type GetTasks200ApplicationJSON struct {
	Data []shared.TaskCompact `json:"data"`
}

type GetTasksResponse struct {
	ContentType                      string
	ErrorResponse                    *shared.ErrorResponse
	StatusCode                       int64
	GetTasks200ApplicationJSONObject *GetTasks200ApplicationJSON
}
