package shared

type UpdatePrivateAuctionProposalRequest struct {
	ExternalDealID         *string          `json:"externalDealId,omitempty"`
	Note                   *MarketplaceNote `json:"note,omitempty"`
	ProposalRevisionNumber *string          `json:"proposalRevisionNumber,omitempty"`
	UpdateAction           *string          `json:"updateAction,omitempty"`
}
