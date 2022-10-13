package operations

type CustomEventsAnalyticsQueryParams struct {
	AppID     *string `queryParam:"style=form,explode=true,name=app_id"`
	EndingAt  *string `queryParam:"style=form,explode=true,name=ending_at"`
	Event     *string `queryParam:"style=form,explode=true,name=event"`
	Length    *string `queryParam:"style=form,explode=true,name=length"`
	SegmentID *string `queryParam:"style=form,explode=true,name=segment_id"`
	Unit      *string `queryParam:"style=form,explode=true,name=unit"`
}

type CustomEventsAnalyticsRequest struct {
	QueryParams CustomEventsAnalyticsQueryParams
}

type CustomEventsAnalyticsResponse struct {
	ContentType string
	StatusCode  int64
}
