package shared

type RegexMatchTuple struct {
	FieldToMatch       FieldToMatch           `json:"FieldToMatch"`
	RegexPatternSetID  string                 `json:"RegexPatternSetId"`
	TextTransformation TextTransformationEnum `json:"TextTransformation"`
}
