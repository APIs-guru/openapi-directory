package shared

// SequenceSegment
// Sequence conditions consist of one or more steps, where each step is defined by one or more dimension/metric conditions. Multiple steps can be combined with special sequence operators.
type SequenceSegment struct {
	FirstStepShouldMatchFirstHit *bool                 `json:"firstStepShouldMatchFirstHit,omitempty"`
	SegmentSequenceSteps         []SegmentSequenceStep `json:"segmentSequenceSteps,omitempty"`
}
