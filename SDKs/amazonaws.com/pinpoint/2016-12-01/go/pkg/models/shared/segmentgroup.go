package shared

type SegmentGroup struct {
	Dimensions     []SegmentDimensions `json:"Dimensions"`
	SourceSegments []SegmentReference  `json:"SourceSegments"`
	SourceType     *SourceTypeEnum     `json:"SourceType"`
	Type           *TypeEnum           `json:"Type"`
}
