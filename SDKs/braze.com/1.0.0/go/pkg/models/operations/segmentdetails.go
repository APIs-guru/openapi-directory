package operations

type SegmentDetailsQueryParams struct {
	SegmentID *string `queryParam:"style=form,explode=true,name=segment_id"`
}

type SegmentDetailsRequest struct {
	QueryParams SegmentDetailsQueryParams
}

type SegmentDetailsResponse struct {
	ContentType string
	StatusCode  int64
}
