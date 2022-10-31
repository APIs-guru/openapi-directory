package shared



type SentimentResponse struct {
    Sentiment *SentimentTypeEnum `json:"sentiment,omitempty"`
    SentimentScore *SentimentScore `json:"sentimentScore,omitempty"`
    
}

