package shared

type FormFieldDefinition struct {
	AllowNumericDigits              *bool    `json:"AllowNumericDigits"`
	AlternateAnchor                 *string  `json:"AlternateAnchor"`
	AnchorMode                      *string  `json:"AnchorMode"`
	BottomAnchor                    *string  `json:"BottomAnchor"`
	DataType                        *string  `json:"DataType"`
	FieldID                         *string  `json:"FieldID"`
	HorizontalAlignmentType         *string  `json:"HorizontalAlignmentType"`
	Ignore                          []string `json:"Ignore"`
	LeftAnchor                      *string  `json:"LeftAnchor"`
	MinimumCharacterCount           *int32   `json:"MinimumCharacterCount"`
	Options                         *string  `json:"Options"`
	TargetDigitCount                *int32   `json:"TargetDigitCount"`
	TargetFieldHeightRelative       *float64 `json:"TargetFieldHeight_Relative"`
	TargetFieldHorizontalAdjustment *float64 `json:"TargetFieldHorizontalAdjustment"`
	TargetFieldVerticalAdjustment   *float64 `json:"TargetFieldVerticalAdjustment"`
	TargetFieldWidthRelative        *float64 `json:"TargetFieldWidth_Relative"`
	TopAnchor                       *string  `json:"TopAnchor"`
	VerticalAlignmentType           *string  `json:"VerticalAlignmentType"`
}
