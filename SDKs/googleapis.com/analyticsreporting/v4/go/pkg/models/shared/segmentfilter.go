package shared



type SegmentFilter struct {
    Not *bool `json:"not,omitempty"`
    SequenceSegment *SequenceSegment `json:"sequenceSegment,omitempty"`
    SimpleSegment *SimpleSegment `json:"simpleSegment,omitempty"`
    
}

