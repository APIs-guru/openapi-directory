package shared

// UnprocessedTraceSegment
// Information about a segment that failed processing.
type UnprocessedTraceSegment struct {
	ErrorCode *string `json:"ErrorCode,omitempty"`
	ID        *string `json:"Id,omitempty"`
	Message   *string `json:"Message,omitempty"`
}
