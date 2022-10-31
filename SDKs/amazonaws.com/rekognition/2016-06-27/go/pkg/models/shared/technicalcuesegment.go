package shared



type TechnicalCueSegment struct {
    Confidence *float32 `json:"Confidence,omitempty"`
    Type *TechnicalCueTypeEnum `json:"Type,omitempty"`
    
}

