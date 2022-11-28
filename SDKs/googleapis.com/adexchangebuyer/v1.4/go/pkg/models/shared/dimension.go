package shared

// Dimension
// This message carries publisher provided breakdown. E.g. {dimension_type: 'COUNTRY', [{dimension_value: {id: 1, name: 'US'}}, {dimension_value: {id: 2, name: 'UK'}}]}
type Dimension struct {
	DimensionType   *string                   `json:"dimensionType,omitempty"`
	DimensionValues []DimensionDimensionValue `json:"dimensionValues,omitempty"`
}
