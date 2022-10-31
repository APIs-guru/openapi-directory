package shared



type LfTagError struct {
    Error *ErrorDetail `json:"Error,omitempty"`
    LfTag *LfTagPair `json:"LFTag,omitempty"`
    
}

