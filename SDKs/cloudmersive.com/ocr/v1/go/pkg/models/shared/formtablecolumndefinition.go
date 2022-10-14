package shared

type FormTableColumnDefinition struct {
	AllowNumericDigits    *bool   `json:"AllowNumericDigits,omitempty"`
	AnchorMode            *string `json:"AnchorMode,omitempty"`
	ColumnID              *string `json:"ColumnID,omitempty"`
	DataType              *string `json:"DataType,omitempty"`
	MinimumCharacterCount *int32  `json:"MinimumCharacterCount,omitempty"`
	TopAnchor             *string `json:"TopAnchor,omitempty"`
}
