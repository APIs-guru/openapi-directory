package shared

type ProposalLastUpdaterOrCommentorRoleEnum string

const (
	ProposalLastUpdaterOrCommentorRoleEnumBuyerSellerRoleUnspecified ProposalLastUpdaterOrCommentorRoleEnum = "BUYER_SELLER_ROLE_UNSPECIFIED"
	ProposalLastUpdaterOrCommentorRoleEnumBuyer                      ProposalLastUpdaterOrCommentorRoleEnum = "BUYER"
	ProposalLastUpdaterOrCommentorRoleEnumSeller                     ProposalLastUpdaterOrCommentorRoleEnum = "SELLER"
)

type ProposalOriginatorRoleEnum string

const (
	ProposalOriginatorRoleEnumBuyerSellerRoleUnspecified ProposalOriginatorRoleEnum = "BUYER_SELLER_ROLE_UNSPECIFIED"
	ProposalOriginatorRoleEnumBuyer                      ProposalOriginatorRoleEnum = "BUYER"
	ProposalOriginatorRoleEnumSeller                     ProposalOriginatorRoleEnum = "SELLER"
)

type ProposalProposalStateEnum string

const (
	ProposalProposalStateEnumProposalStateUnspecified ProposalProposalStateEnum = "PROPOSAL_STATE_UNSPECIFIED"
	ProposalProposalStateEnumProposed                 ProposalProposalStateEnum = "PROPOSED"
	ProposalProposalStateEnumBuyerAccepted            ProposalProposalStateEnum = "BUYER_ACCEPTED"
	ProposalProposalStateEnumSellerAccepted           ProposalProposalStateEnum = "SELLER_ACCEPTED"
	ProposalProposalStateEnumCanceled                 ProposalProposalStateEnum = "CANCELED"
	ProposalProposalStateEnumFinalized                ProposalProposalStateEnum = "FINALIZED"
)

type Proposal struct {
	BilledBuyer                *Buyer                                  `json:"billedBuyer"`
	Buyer                      *Buyer                                  `json:"buyer"`
	BuyerContacts              []ContactInformation                    `json:"buyerContacts"`
	BuyerPrivateData           *PrivateData                            `json:"buyerPrivateData"`
	Deals                      []Deal                                  `json:"deals"`
	DisplayName                *string                                 `json:"displayName"`
	IsRenegotiating            *bool                                   `json:"isRenegotiating"`
	IsSetupComplete            *bool                                   `json:"isSetupComplete"`
	LastUpdaterOrCommentorRole *ProposalLastUpdaterOrCommentorRoleEnum `json:"lastUpdaterOrCommentorRole"`
	Notes                      []Note                                  `json:"notes"`
	OriginatorRole             *ProposalOriginatorRoleEnum             `json:"originatorRole"`
	PrivateAuctionID           *string                                 `json:"privateAuctionId"`
	ProposalID                 *string                                 `json:"proposalId"`
	ProposalRevision           *string                                 `json:"proposalRevision"`
	ProposalState              *ProposalProposalStateEnum              `json:"proposalState"`
	Seller                     *Seller                                 `json:"seller"`
	SellerContacts             []ContactInformation                    `json:"sellerContacts"`
	TermsAndConditions         *string                                 `json:"termsAndConditions"`
	UpdateTime                 *string                                 `json:"updateTime"`
}
