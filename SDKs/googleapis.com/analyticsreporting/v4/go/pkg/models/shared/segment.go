package shared

// Segment
// The segment definition, if the report needs to be segmented. A Segment is a subset of the Analytics data. For example, of the entire set of users, one Segment might be users from a particular country or city.
type Segment struct {
	DynamicSegment *DynamicSegment `json:"dynamicSegment,omitempty"`
	SegmentID      *string         `json:"segmentId,omitempty"`
}
