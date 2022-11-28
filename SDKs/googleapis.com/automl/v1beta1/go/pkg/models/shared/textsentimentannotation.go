package shared

// TextSentimentAnnotation
// Contains annotation details specific to text sentiment.
type TextSentimentAnnotation struct {
	Sentiment *int32 `json:"sentiment,omitempty"`
}
