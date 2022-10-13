package shared

type Interpretation struct {
	Intent            *Intent            `json:"intent"`
	NluConfidence     *ConfidenceScore   `json:"nluConfidence"`
	SentimentResponse *SentimentResponse `json:"sentimentResponse"`
}
