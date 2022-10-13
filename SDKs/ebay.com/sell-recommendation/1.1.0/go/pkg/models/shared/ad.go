package shared

type Ad struct {
	BidPercentages []BidPercentages `json:"bidPercentages"`
	PromoteWithAd  *string          `json:"promoteWithAd"`
}
