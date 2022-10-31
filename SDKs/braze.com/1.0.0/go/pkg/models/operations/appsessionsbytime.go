package operations

type AppSessionsByTimeQueryParams struct {
	AppID     *string `queryParam:"style=form,explode=true,name=app_id"`
	EndingAt  *string `queryParam:"style=form,explode=true,name=ending_at"`
	Length    *string `queryParam:"style=form,explode=true,name=length"`
	SegmentID *string `queryParam:"style=form,explode=true,name=segment_id"`
	Unit      *string `queryParam:"style=form,explode=true,name=unit"`
}

type AppSessionsByTimeRequest struct {
	QueryParams AppSessionsByTimeQueryParams
}

type AppSessionsByTimeResponse struct {
	ContentType string
	StatusCode  int64
}
