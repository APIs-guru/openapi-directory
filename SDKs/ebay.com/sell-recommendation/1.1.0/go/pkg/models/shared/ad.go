package shared

type Ad struct {
	BidPercentages []BidPercentages `json:"bidPercentages,omitempty"`
	PromoteWithAd  *string          `json:"promoteWithAd,omitempty"`
}
