package shared

type Metadata struct {
	Dimensions []DimensionMetadata `json:"dimensions"`
	Metrics    []MetricMetadata    `json:"metrics"`
	Name       *string             `json:"name"`
}
