package shared

type SentimentScore struct {
	Mixed    *float64 `json:"mixed,omitempty"`
	Negative *float64 `json:"negative,omitempty"`
	Neutral  *float64 `json:"neutral,omitempty"`
	Positive *float64 `json:"positive,omitempty"`
}
