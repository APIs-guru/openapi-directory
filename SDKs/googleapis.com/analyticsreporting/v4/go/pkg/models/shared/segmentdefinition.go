package shared

// SegmentDefinition
// SegmentDefinition defines the segment to be a set of SegmentFilters which are combined together with a logical `AND` operation.
type SegmentDefinition struct {
	SegmentFilters []SegmentFilter `json:"segmentFilters,omitempty"`
}
