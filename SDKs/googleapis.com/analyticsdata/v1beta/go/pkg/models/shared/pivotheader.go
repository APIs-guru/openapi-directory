package shared

type PivotHeader struct {
	PivotDimensionHeaders []PivotDimensionHeader `json:"pivotDimensionHeaders,omitempty"`
	RowCount              *int32                 `json:"rowCount,omitempty"`
}
