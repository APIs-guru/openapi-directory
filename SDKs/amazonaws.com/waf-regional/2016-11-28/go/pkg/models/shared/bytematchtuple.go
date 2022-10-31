package shared



type ByteMatchTuple struct {
    FieldToMatch FieldToMatch `json:"FieldToMatch"`
    PositionalConstraint PositionalConstraintEnum `json:"PositionalConstraint"`
    TargetString string `json:"TargetString"`
    TextTransformation TextTransformationEnum `json:"TextTransformation"`
    
}

