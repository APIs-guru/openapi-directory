package shared



type SegmentGroup struct {
    Dimensions []SegmentDimensions `json:"Dimensions,omitempty"`
    SourceSegments []SegmentReference `json:"SourceSegments,omitempty"`
    SourceType *SourceTypeEnum `json:"SourceType,omitempty"`
    Type *TypeEnum `json:"Type,omitempty"`
    
}

