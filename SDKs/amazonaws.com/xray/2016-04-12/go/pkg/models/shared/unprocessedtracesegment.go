package shared

type UnprocessedTraceSegment struct {
	ErrorCode *string `json:"ErrorCode"`
	ID        *string `json:"Id"`
	Message   *string `json:"Message"`
}
