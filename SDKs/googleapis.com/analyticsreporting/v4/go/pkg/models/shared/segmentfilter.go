package shared

type SegmentFilter struct {
	Not             *bool            `json:"not"`
	SequenceSegment *SequenceSegment `json:"sequenceSegment"`
	SimpleSegment   *SimpleSegment   `json:"simpleSegment"`
}
