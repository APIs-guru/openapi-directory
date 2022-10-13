package shared

type SentimentResponse struct {
	SentimentLabel *string `json:"sentimentLabel"`
	SentimentScore *string `json:"sentimentScore"`
}
