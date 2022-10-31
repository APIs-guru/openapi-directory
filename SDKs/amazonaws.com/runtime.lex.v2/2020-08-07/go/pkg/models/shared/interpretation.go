package shared



type Interpretation struct {
    Intent *Intent `json:"intent,omitempty"`
    NluConfidence *ConfidenceScore `json:"nluConfidence,omitempty"`
    SentimentResponse *SentimentResponse `json:"sentimentResponse,omitempty"`
    
}

