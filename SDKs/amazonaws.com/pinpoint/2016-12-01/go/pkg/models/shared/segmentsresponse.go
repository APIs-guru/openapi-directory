package shared

type SegmentsResponse struct {
	Item      []SegmentResponse `json:"Item"`
	NextToken *string           `json:"NextToken,omitempty"`
}
