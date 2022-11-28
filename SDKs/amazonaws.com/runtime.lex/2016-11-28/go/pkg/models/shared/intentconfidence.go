package shared

// IntentConfidence
// Provides a score that indicates the confidence that Amazon Lex has that an intent is the one that satisfies the user's intent.
type IntentConfidence struct {
	Score *float64 `json:"score,omitempty"`
}
