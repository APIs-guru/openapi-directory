package shared



type DimensionKeyDescription struct {
    Dimensions map[string]string `json:"Dimensions,omitempty"`
    Partitions []float64 `json:"Partitions,omitempty"`
    Total *float64 `json:"Total,omitempty"`
    
}

