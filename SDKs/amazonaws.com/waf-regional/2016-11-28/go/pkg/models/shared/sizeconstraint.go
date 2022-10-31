package shared

type SizeConstraint struct {
	ComparisonOperator ComparisonOperatorEnum `json:"ComparisonOperator"`
	FieldToMatch       FieldToMatch           `json:"FieldToMatch"`
	Size               int64                  `json:"Size"`
	TextTransformation TextTransformationEnum `json:"TextTransformation"`
}
