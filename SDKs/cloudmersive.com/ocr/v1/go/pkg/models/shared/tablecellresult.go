package shared

type TableCellResult struct {
	CellValues []OcrPhotoTextElement `json:"CellValues"`
	ColumnID   *string               `json:"ColumnID"`
}
