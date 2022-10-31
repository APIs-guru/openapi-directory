package shared



type TableCellResult struct {
    CellValues []OcrPhotoTextElement `json:"CellValues,omitempty"`
    ColumnID *string `json:"ColumnID,omitempty"`
    
}

