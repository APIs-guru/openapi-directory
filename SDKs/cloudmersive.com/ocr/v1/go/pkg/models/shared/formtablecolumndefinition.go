package shared

type FormTableColumnDefinition struct {
	AllowNumericDigits    *bool   `json:"AllowNumericDigits"`
	AnchorMode            *string `json:"AnchorMode"`
	ColumnID              *string `json:"ColumnID"`
	DataType              *string `json:"DataType"`
	MinimumCharacterCount *int32  `json:"MinimumCharacterCount"`
	TopAnchor             *string `json:"TopAnchor"`
}
