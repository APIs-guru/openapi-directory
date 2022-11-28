package shared

// FormFieldDefinition
// Definition of a form field for OCR data extraction from images
type FormFieldDefinition struct {
	AllowNumericDigits              *bool    `json:"AllowNumericDigits,omitempty"`
	AlternateAnchor                 *string  `json:"AlternateAnchor,omitempty"`
	AnchorMode                      *string  `json:"AnchorMode,omitempty"`
	BottomAnchor                    *string  `json:"BottomAnchor,omitempty"`
	DataType                        *string  `json:"DataType,omitempty"`
	FieldID                         *string  `json:"FieldID,omitempty"`
	HorizontalAlignmentType         *string  `json:"HorizontalAlignmentType,omitempty"`
	Ignore                          []string `json:"Ignore,omitempty"`
	LeftAnchor                      *string  `json:"LeftAnchor,omitempty"`
	MinimumCharacterCount           *int32   `json:"MinimumCharacterCount,omitempty"`
	Options                         *string  `json:"Options,omitempty"`
	TargetDigitCount                *int32   `json:"TargetDigitCount,omitempty"`
	TargetFieldHeightRelative       *float64 `json:"TargetFieldHeight_Relative,omitempty"`
	TargetFieldHorizontalAdjustment *float64 `json:"TargetFieldHorizontalAdjustment,omitempty"`
	TargetFieldVerticalAdjustment   *float64 `json:"TargetFieldVerticalAdjustment,omitempty"`
	TargetFieldWidthRelative        *float64 `json:"TargetFieldWidth_Relative,omitempty"`
	TopAnchor                       *string  `json:"TopAnchor,omitempty"`
	VerticalAlignmentType           *string  `json:"VerticalAlignmentType,omitempty"`
}
