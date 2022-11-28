package shared

// SegmentGroup
// Specifies the base segments and dimensions for a segment, and the relationships between these base segments and dimensions.
type SegmentGroup struct {
	Dimensions     []SegmentDimensions `json:"Dimensions,omitempty"`
	SourceSegments []SegmentReference  `json:"SourceSegments,omitempty"`
	SourceType     *SourceTypeEnum     `json:"SourceType,omitempty"`
	Type           *TypeEnum           `json:"Type,omitempty"`
}
