package shared

type PutTraceSegmentsResult struct {
	UnprocessedTraceSegments []UnprocessedTraceSegment `json:"UnprocessedTraceSegments,omitempty"`
}
