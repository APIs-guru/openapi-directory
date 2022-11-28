package shared

// FormTableColumnDefinition
// Definition of a column within a table for OCR data extraction from images
type FormTableColumnDefinition struct {
	AllowNumericDigits    *bool   `json:"AllowNumericDigits,omitempty"`
	AnchorMode            *string `json:"AnchorMode,omitempty"`
	ColumnID              *string `json:"ColumnID,omitempty"`
	DataType              *string `json:"DataType,omitempty"`
	MinimumCharacterCount *int32  `json:"MinimumCharacterCount,omitempty"`
	TopAnchor             *string `json:"TopAnchor,omitempty"`
}
