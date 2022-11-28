package shared

// PivotDimensionHeader
// Summarizes dimension values from a row for this pivot.
type PivotDimensionHeader struct {
	DimensionValues []DimensionValue `json:"dimensionValues,omitempty"`
}
