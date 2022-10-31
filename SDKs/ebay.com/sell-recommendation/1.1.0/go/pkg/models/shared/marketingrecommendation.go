package shared

type MarketingRecommendation struct {
	Ad      *Ad     `json:"ad,omitempty"`
	Message *string `json:"message,omitempty"`
}
