package shared

// DynamicSegment
// Dynamic segment definition for defining the segment within the request. A segment can select users, sessions or both.
type DynamicSegment struct {
	Name           *string            `json:"name,omitempty"`
	SessionSegment *SegmentDefinition `json:"sessionSegment,omitempty"`
	UserSegment    *SegmentDefinition `json:"userSegment,omitempty"`
}
