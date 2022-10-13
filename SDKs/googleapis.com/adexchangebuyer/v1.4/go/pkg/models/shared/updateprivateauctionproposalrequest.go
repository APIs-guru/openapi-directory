package shared

type UpdatePrivateAuctionProposalRequest struct {
	ExternalDealID         *string          `json:"externalDealId"`
	Note                   *MarketplaceNote `json:"note"`
	ProposalRevisionNumber *string          `json:"proposalRevisionNumber"`
	UpdateAction           *string          `json:"updateAction"`
}
