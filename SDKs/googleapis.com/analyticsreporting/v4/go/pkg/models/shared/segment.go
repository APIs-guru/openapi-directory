package shared

type Segment struct {
	DynamicSegment *DynamicSegment `json:"dynamicSegment"`
	SegmentID      *string         `json:"segmentId"`
}
