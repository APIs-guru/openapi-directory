package shared

// SentimentAnalysisSettings
// Determines whether Amazon Lex will use Amazon Comprehend to detect the sentiment of user utterances.
type SentimentAnalysisSettings struct {
	DetectSentiment bool `json:"detectSentiment"`
}
