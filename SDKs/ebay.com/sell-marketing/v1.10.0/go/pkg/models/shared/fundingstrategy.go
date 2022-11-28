package shared

// FundingStrategy
// This type defines how the Promoted Listing fee is calculated when fundingModel is set to COST_PER_SALE.
type FundingStrategy struct {
	BidPercentage *string `json:"bidPercentage,omitempty"`
	FundingModel  *string `json:"fundingModel,omitempty"`
}
