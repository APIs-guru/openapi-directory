package shared

type SentimentScore struct {
	Mixed    *float64 `json:"mixed"`
	Negative *float64 `json:"negative"`
	Neutral  *float64 `json:"neutral"`
	Positive *float64 `json:"positive"`
}
