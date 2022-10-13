package shared

type Proposal struct {
	BilledBuyer                *Buyer               `json:"billedBuyer"`
	Buyer                      *Buyer               `json:"buyer"`
	BuyerContacts              []ContactInformation `json:"buyerContacts"`
	BuyerPrivateData           *PrivateData         `json:"buyerPrivateData"`
	DbmAdvertiserIds           []string             `json:"dbmAdvertiserIds"`
	HasBuyerSignedOff          *bool                `json:"hasBuyerSignedOff"`
	HasSellerSignedOff         *bool                `json:"hasSellerSignedOff"`
	InventorySource            *string              `json:"inventorySource"`
	IsRenegotiating            *bool                `json:"isRenegotiating"`
	IsSetupComplete            *bool                `json:"isSetupComplete"`
	Kind                       *string              `json:"kind"`
	Labels                     []MarketplaceLabel   `json:"labels"`
	LastUpdaterOrCommentorRole *string              `json:"lastUpdaterOrCommentorRole"`
	Name                       *string              `json:"name"`
	NegotiationID              *string              `json:"negotiationId"`
	OriginatorRole             *string              `json:"originatorRole"`
	PrivateAuctionID           *string              `json:"privateAuctionId"`
	ProposalID                 *string              `json:"proposalId"`
	ProposalState              *string              `json:"proposalState"`
	RevisionNumber             *string              `json:"revisionNumber"`
	RevisionTimeMs             *string              `json:"revisionTimeMs"`
	Seller                     *Seller              `json:"seller"`
	SellerContacts             []ContactInformation `json:"sellerContacts"`
}
