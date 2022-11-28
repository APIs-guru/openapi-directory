package shared

// DimensionKeyDescription
// An array of descriptions and aggregated values for each dimension within a dimension group.
type DimensionKeyDescription struct {
	Dimensions map[string]string `json:"Dimensions,omitempty"`
	Partitions []float64         `json:"Partitions,omitempty"`
	Total      *float64          `json:"Total,omitempty"`
}
