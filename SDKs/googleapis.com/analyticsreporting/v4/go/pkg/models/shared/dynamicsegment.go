package shared



type DynamicSegment struct {
    Name *string `json:"name,omitempty"`
    SessionSegment *SegmentDefinition `json:"sessionSegment,omitempty"`
    UserSegment *SegmentDefinition `json:"userSegment,omitempty"`
    
}

