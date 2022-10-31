package shared



type SetDimension struct {
    DimensionType *DimensionTypeEnum `json:"DimensionType,omitempty"`
    Values []string `json:"Values"`
    
}

