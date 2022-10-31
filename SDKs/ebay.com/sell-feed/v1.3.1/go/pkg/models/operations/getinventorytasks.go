package operations

import (
	"openapi/pkg/models/shared"
)

type GetInventoryTasksQueryParams struct {
	DateRange    *string `queryParam:"style=form,explode=true,name=date_range"`
	FeedType     *string `queryParam:"style=form,explode=true,name=feed_type"`
	Limit        *string `queryParam:"style=form,explode=true,name=limit"`
	LookBackDays *string `queryParam:"style=form,explode=true,name=look_back_days"`
	Offset       *string `queryParam:"style=form,explode=true,name=offset"`
	ScheduleID   *string `queryParam:"style=form,explode=true,name=schedule_id"`
}

type GetInventoryTasksSecurity struct {
	APIAuth shared.SchemeAPIAuth `security:"scheme,type=oauth2"`
}

type GetInventoryTasksRequest struct {
	QueryParams GetInventoryTasksQueryParams
	Security    GetInventoryTasksSecurity
}

type GetInventoryTasksResponse struct {
	ContentType             string
	InventoryTaskCollection *shared.InventoryTaskCollection
	StatusCode              int64
}
