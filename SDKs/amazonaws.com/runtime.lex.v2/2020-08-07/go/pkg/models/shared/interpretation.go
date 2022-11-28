package shared

// Interpretation
// An intent that Amazon Lex V2 determined might satisfy the user's utterance. The intents are ordered by the confidence score.
type Interpretation struct {
	Intent            *Intent            `json:"intent,omitempty"`
	NluConfidence     *ConfidenceScore   `json:"nluConfidence,omitempty"`
	SentimentResponse *SentimentResponse `json:"sentimentResponse,omitempty"`
}
