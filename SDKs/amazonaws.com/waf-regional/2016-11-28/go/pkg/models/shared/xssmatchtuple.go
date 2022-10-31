package shared



type XSSMatchTuple struct {
    FieldToMatch FieldToMatch `json:"FieldToMatch"`
    TextTransformation TextTransformationEnum `json:"TextTransformation"`
    
}

