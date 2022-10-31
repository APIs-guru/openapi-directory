package shared



type TextSegment struct {
    Content *string `json:"content,omitempty"`
    EndOffset *string `json:"endOffset,omitempty"`
    StartOffset *string `json:"startOffset,omitempty"`
    
}

