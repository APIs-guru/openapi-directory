package shared

// Rule
// A condition in the call between the customer and the agent that you want to filter for.
type Rule struct {
	InterruptionFilter *InterruptionFilter `json:"InterruptionFilter,omitempty"`
	NonTalkTimeFilter  *NonTalkTimeFilter  `json:"NonTalkTimeFilter,omitempty"`
	SentimentFilter    *SentimentFilter    `json:"SentimentFilter,omitempty"`
	TranscriptFilter   *TranscriptFilter   `json:"TranscriptFilter,omitempty"`
}
