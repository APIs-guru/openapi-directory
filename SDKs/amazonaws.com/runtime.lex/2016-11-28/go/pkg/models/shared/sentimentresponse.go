package shared

// SentimentResponse
// <p>The sentiment expressed in an utterance.</p> <p>When the bot is configured to send utterances to Amazon Comprehend for sentiment analysis, this field structure contains the result of the analysis.</p>
type SentimentResponse struct {
	SentimentLabel *string `json:"sentimentLabel,omitempty"`
	SentimentScore *string `json:"sentimentScore,omitempty"`
}
