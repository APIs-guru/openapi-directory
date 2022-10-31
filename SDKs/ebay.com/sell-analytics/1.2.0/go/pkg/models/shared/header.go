package shared



type Header struct {
    DimensionKeys []Definition `json:"dimensionKeys,omitempty"`
    Metrics []Definition `json:"metrics,omitempty"`
    
}

