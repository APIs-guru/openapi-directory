package shared



type TextExtractionAnnotation struct {
    Score *float32 `json:"score,omitempty"`
    TextSegment *TextSegment `json:"textSegment,omitempty"`
    
}

