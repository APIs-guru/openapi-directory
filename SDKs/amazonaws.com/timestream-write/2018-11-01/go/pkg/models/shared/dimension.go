package shared



type Dimension struct {
    DimensionValueType *DimensionValueTypeEnum `json:"DimensionValueType,omitempty"`
    Name string `json:"Name"`
    Value string `json:"Value"`
    
}

