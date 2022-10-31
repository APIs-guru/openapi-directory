package shared



type SentimentResponse struct {
    SentimentLabel *string `json:"sentimentLabel,omitempty"`
    SentimentScore *string `json:"sentimentScore,omitempty"`
    
}

