package operations

import (
	"openapi/pkg/models/shared"
)

type GetOrderTasksQueryParams struct {
	DateRange    *string `queryParam:"style=form,explode=true,name=date_range"`
	FeedType     *string `queryParam:"style=form,explode=true,name=feed_type"`
	Limit        *string `queryParam:"style=form,explode=true,name=limit"`
	LookBackDays *string `queryParam:"style=form,explode=true,name=look_back_days"`
	Offset       *string `queryParam:"style=form,explode=true,name=offset"`
	ScheduleID   *string `queryParam:"style=form,explode=true,name=schedule_id"`
}

type GetOrderTasksSecurity struct {
	APIAuth shared.SchemeAPIAuth `security:"scheme,type=oauth2"`
}

type GetOrderTasksRequest struct {
	QueryParams GetOrderTasksQueryParams
	Security    GetOrderTasksSecurity
}

type GetOrderTasksResponse struct {
	ContentType         string
	OrderTaskCollection *shared.OrderTaskCollection
	StatusCode          int64
}
