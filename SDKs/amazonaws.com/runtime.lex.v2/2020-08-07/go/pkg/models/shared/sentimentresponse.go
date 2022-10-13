package shared

type SentimentResponse struct {
	Sentiment      *SentimentTypeEnum `json:"sentiment"`
	SentimentScore *SentimentScore    `json:"sentimentScore"`
}
