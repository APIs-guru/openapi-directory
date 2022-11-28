package shared

// SegmentFilter
// SegmentFilter defines the segment to be either a simple or a sequence segment. A simple segment condition contains dimension and metric conditions to select the sessions or users. A sequence segment condition can be used to select users or sessions based on sequential conditions.
type SegmentFilter struct {
	Not             *bool            `json:"not,omitempty"`
	SequenceSegment *SequenceSegment `json:"sequenceSegment,omitempty"`
	SimpleSegment   *SimpleSegment   `json:"simpleSegment,omitempty"`
}
