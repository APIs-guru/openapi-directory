package shared

// PivotHeader
// Dimensions' values in a single pivot.
type PivotHeader struct {
	PivotDimensionHeaders []PivotDimensionHeader `json:"pivotDimensionHeaders,omitempty"`
	RowCount              *int32                 `json:"rowCount,omitempty"`
}
