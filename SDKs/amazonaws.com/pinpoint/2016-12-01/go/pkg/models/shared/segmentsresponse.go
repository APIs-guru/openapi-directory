package shared

// SegmentsResponse
// Provides information about all the segments that are associated with an application.
type SegmentsResponse struct {
	Item      []SegmentResponse `json:"Item"`
	NextToken *string           `json:"NextToken,omitempty"`
}
