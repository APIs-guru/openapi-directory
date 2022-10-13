package shared

type FundingStrategy struct {
	BidPercentage *string `json:"bidPercentage"`
	FundingModel  *string `json:"fundingModel"`
}
