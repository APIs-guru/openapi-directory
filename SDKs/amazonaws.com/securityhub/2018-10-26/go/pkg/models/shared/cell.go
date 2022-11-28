package shared

// Cell
// An occurrence of sensitive data detected in a Microsoft Excel workbook, comma-separated value (CSV) file, or tab-separated value (TSV) file.
type Cell struct {
	CellReference *string `json:"CellReference,omitempty"`
	Column        *int64  `json:"Column,omitempty"`
	ColumnName    *string `json:"ColumnName,omitempty"`
	Row           *int64  `json:"Row,omitempty"`
}
