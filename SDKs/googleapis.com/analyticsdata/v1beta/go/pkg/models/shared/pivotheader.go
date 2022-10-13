package shared

type PivotHeader struct {
	PivotDimensionHeaders []PivotDimensionHeader `json:"pivotDimensionHeaders"`
	RowCount              *int32                 `json:"rowCount"`
}
