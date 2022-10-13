package shared

type SequenceSegment struct {
	FirstStepShouldMatchFirstHit *bool                 `json:"firstStepShouldMatchFirstHit"`
	SegmentSequenceSteps         []SegmentSequenceStep `json:"segmentSequenceSteps"`
}
