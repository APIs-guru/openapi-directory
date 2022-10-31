package shared




type SegmentSequenceStepMatchTypeEnum string

const (
    SegmentSequenceStepMatchTypeEnumUnspecifiedMatchType SegmentSequenceStepMatchTypeEnum = "UNSPECIFIED_MATCH_TYPE"
SegmentSequenceStepMatchTypeEnumPrecedes SegmentSequenceStepMatchTypeEnum = "PRECEDES"
SegmentSequenceStepMatchTypeEnumImmediatelyPrecedes SegmentSequenceStepMatchTypeEnum = "IMMEDIATELY_PRECEDES"
)


type SegmentSequenceStep struct {
    MatchType *SegmentSequenceStepMatchTypeEnum `json:"matchType,omitempty"`
    OrFiltersForSegment []OrFiltersForSegment `json:"orFiltersForSegment,omitempty"`
    
}

