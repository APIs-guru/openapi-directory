package shared

// TableCellResult
// The recognition result of one cell in one row in a table of a form
type TableCellResult struct {
	CellValues []OcrPhotoTextElement `json:"CellValues,omitempty"`
	ColumnID   *string               `json:"ColumnID,omitempty"`
}
