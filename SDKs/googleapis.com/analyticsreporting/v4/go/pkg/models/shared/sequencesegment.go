package shared

type SequenceSegment struct {
	FirstStepShouldMatchFirstHit *bool                 `json:"firstStepShouldMatchFirstHit,omitempty"`
	SegmentSequenceSteps         []SegmentSequenceStep `json:"segmentSequenceSteps,omitempty"`
}
