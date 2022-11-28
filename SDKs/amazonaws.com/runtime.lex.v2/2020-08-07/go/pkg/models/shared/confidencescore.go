package shared

// ConfidenceScore
// Provides a score that indicates the confidence that Amazon Lex V2 has that an intent is the one that satisfies the user's intent.
type ConfidenceScore struct {
	Score *float64 `json:"score,omitempty"`
}
