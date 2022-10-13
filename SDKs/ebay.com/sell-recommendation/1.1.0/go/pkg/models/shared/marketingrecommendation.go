package shared

type MarketingRecommendation struct {
	Ad      *Ad     `json:"ad"`
	Message *string `json:"message"`
}
