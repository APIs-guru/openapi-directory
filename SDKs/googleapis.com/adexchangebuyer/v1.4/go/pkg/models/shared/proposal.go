package shared

type Proposal struct {
	BilledBuyer                *Buyer               `json:"billedBuyer,omitempty"`
	Buyer                      *Buyer               `json:"buyer,omitempty"`
	BuyerContacts              []ContactInformation `json:"buyerContacts,omitempty"`
	BuyerPrivateData           *PrivateData         `json:"buyerPrivateData,omitempty"`
	DbmAdvertiserIds           []string             `json:"dbmAdvertiserIds,omitempty"`
	HasBuyerSignedOff          *bool                `json:"hasBuyerSignedOff,omitempty"`
	HasSellerSignedOff         *bool                `json:"hasSellerSignedOff,omitempty"`
	InventorySource            *string              `json:"inventorySource,omitempty"`
	IsRenegotiating            *bool                `json:"isRenegotiating,omitempty"`
	IsSetupComplete            *bool                `json:"isSetupComplete,omitempty"`
	Kind                       *string              `json:"kind,omitempty"`
	Labels                     []MarketplaceLabel   `json:"labels,omitempty"`
	LastUpdaterOrCommentorRole *string              `json:"lastUpdaterOrCommentorRole,omitempty"`
	Name                       *string              `json:"name,omitempty"`
	NegotiationID              *string              `json:"negotiationId,omitempty"`
	OriginatorRole             *string              `json:"originatorRole,omitempty"`
	PrivateAuctionID           *string              `json:"privateAuctionId,omitempty"`
	ProposalID                 *string              `json:"proposalId,omitempty"`
	ProposalState              *string              `json:"proposalState,omitempty"`
	RevisionNumber             *string              `json:"revisionNumber,omitempty"`
	RevisionTimeMs             *string              `json:"revisionTimeMs,omitempty"`
	Seller                     *Seller              `json:"seller,omitempty"`
	SellerContacts             []ContactInformation `json:"sellerContacts,omitempty"`
}
