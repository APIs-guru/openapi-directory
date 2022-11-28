package shared

// Cell
// Specifies the location of an occurrence of sensitive data in a Microsoft Excel workbook, CSV file, or TSV file.
type Cell struct {
	CellReference *string `json:"cellReference,omitempty"`
	Column        *int64  `json:"column,omitempty"`
	ColumnName    *string `json:"columnName,omitempty"`
	Row           *int64  `json:"row,omitempty"`
}
