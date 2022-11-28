package shared

// Metadata
// The dimensions and metrics currently accepted in reporting methods.
type Metadata struct {
	Dimensions []DimensionMetadata `json:"dimensions,omitempty"`
	Metrics    []MetricMetadata    `json:"metrics,omitempty"`
	Name       *string             `json:"name,omitempty"`
}
