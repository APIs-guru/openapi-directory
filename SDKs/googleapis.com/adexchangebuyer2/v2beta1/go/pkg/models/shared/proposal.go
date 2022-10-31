package shared




type ProposalLastUpdaterOrCommentorRoleEnum string

const (
    ProposalLastUpdaterOrCommentorRoleEnumBuyerSellerRoleUnspecified ProposalLastUpdaterOrCommentorRoleEnum = "BUYER_SELLER_ROLE_UNSPECIFIED"
ProposalLastUpdaterOrCommentorRoleEnumBuyer ProposalLastUpdaterOrCommentorRoleEnum = "BUYER"
ProposalLastUpdaterOrCommentorRoleEnumSeller ProposalLastUpdaterOrCommentorRoleEnum = "SELLER"
)



type ProposalOriginatorRoleEnum string

const (
    ProposalOriginatorRoleEnumBuyerSellerRoleUnspecified ProposalOriginatorRoleEnum = "BUYER_SELLER_ROLE_UNSPECIFIED"
ProposalOriginatorRoleEnumBuyer ProposalOriginatorRoleEnum = "BUYER"
ProposalOriginatorRoleEnumSeller ProposalOriginatorRoleEnum = "SELLER"
)



type ProposalProposalStateEnum string

const (
    ProposalProposalStateEnumProposalStateUnspecified ProposalProposalStateEnum = "PROPOSAL_STATE_UNSPECIFIED"
ProposalProposalStateEnumProposed ProposalProposalStateEnum = "PROPOSED"
ProposalProposalStateEnumBuyerAccepted ProposalProposalStateEnum = "BUYER_ACCEPTED"
ProposalProposalStateEnumSellerAccepted ProposalProposalStateEnum = "SELLER_ACCEPTED"
ProposalProposalStateEnumCanceled ProposalProposalStateEnum = "CANCELED"
ProposalProposalStateEnumFinalized ProposalProposalStateEnum = "FINALIZED"
)


type Proposal struct {
    BilledBuyer *Buyer `json:"billedBuyer,omitempty"`
    Buyer *Buyer `json:"buyer,omitempty"`
    BuyerContacts []ContactInformation `json:"buyerContacts,omitempty"`
    BuyerPrivateData *PrivateData `json:"buyerPrivateData,omitempty"`
    Deals []Deal `json:"deals,omitempty"`
    DisplayName *string `json:"displayName,omitempty"`
    IsRenegotiating *bool `json:"isRenegotiating,omitempty"`
    IsSetupComplete *bool `json:"isSetupComplete,omitempty"`
    LastUpdaterOrCommentorRole *ProposalLastUpdaterOrCommentorRoleEnum `json:"lastUpdaterOrCommentorRole,omitempty"`
    Notes []Note `json:"notes,omitempty"`
    OriginatorRole *ProposalOriginatorRoleEnum `json:"originatorRole,omitempty"`
    PrivateAuctionID *string `json:"privateAuctionId,omitempty"`
    ProposalID *string `json:"proposalId,omitempty"`
    ProposalRevision *string `json:"proposalRevision,omitempty"`
    ProposalState *ProposalProposalStateEnum `json:"proposalState,omitempty"`
    Seller *Seller `json:"seller,omitempty"`
    SellerContacts []ContactInformation `json:"sellerContacts,omitempty"`
    TermsAndConditions *string `json:"termsAndConditions,omitempty"`
    UpdateTime *string `json:"updateTime,omitempty"`
    
}

