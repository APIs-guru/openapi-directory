package shared



type Dimension struct {
    DimensionType *string `json:"dimensionType,omitempty"`
    DimensionValues []DimensionDimensionValue `json:"dimensionValues,omitempty"`
    
}

