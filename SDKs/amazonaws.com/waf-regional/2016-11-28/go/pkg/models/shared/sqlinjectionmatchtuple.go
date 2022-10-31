package shared



type SQLInjectionMatchTuple struct {
    FieldToMatch FieldToMatch `json:"FieldToMatch"`
    TextTransformation TextTransformationEnum `json:"TextTransformation"`
    
}

