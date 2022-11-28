package shared

// Ad
// A complex type that contains recommendations and information on how to configure Promoted Listings ad campaigns.
type Ad struct {
	BidPercentages []BidPercentages `json:"bidPercentages,omitempty"`
	PromoteWithAd  *string          `json:"promoteWithAd,omitempty"`
}
