package shared

type Segment struct {
	DynamicSegment *DynamicSegment `json:"dynamicSegment,omitempty"`
	SegmentID      *string         `json:"segmentId,omitempty"`
}
