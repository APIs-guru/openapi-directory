package shared

type DynamicSegment struct {
	Name           *string            `json:"name"`
	SessionSegment *SegmentDefinition `json:"sessionSegment"`
	UserSegment    *SegmentDefinition `json:"userSegment"`
}
