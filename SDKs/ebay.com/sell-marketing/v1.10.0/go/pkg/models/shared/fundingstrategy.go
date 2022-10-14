package shared

type FundingStrategy struct {
	BidPercentage *string `json:"bidPercentage,omitempty"`
	FundingModel  *string `json:"fundingModel,omitempty"`
}
