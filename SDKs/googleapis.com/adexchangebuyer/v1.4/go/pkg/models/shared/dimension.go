package shared

type Dimension struct {
	DimensionType   *string                   `json:"dimensionType"`
	DimensionValues []DimensionDimensionValue `json:"dimensionValues"`
}
