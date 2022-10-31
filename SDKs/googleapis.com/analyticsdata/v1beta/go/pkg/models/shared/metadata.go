package shared



type Metadata struct {
    Dimensions []DimensionMetadata `json:"dimensions,omitempty"`
    Metrics []MetricMetadata `json:"metrics,omitempty"`
    Name *string `json:"name,omitempty"`
    
}

