package shared

type ProposalDealTypeEnum string

const (
	ProposalDealTypeEnumDealTypeUnspecified    ProposalDealTypeEnum = "DEAL_TYPE_UNSPECIFIED"
	ProposalDealTypeEnumPreferredDeal          ProposalDealTypeEnum = "PREFERRED_DEAL"
	ProposalDealTypeEnumPrivateAuction         ProposalDealTypeEnum = "PRIVATE_AUCTION"
	ProposalDealTypeEnumProgrammaticGuaranteed ProposalDealTypeEnum = "PROGRAMMATIC_GUARANTEED"
)

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

type ProposalStateEnum string

const (
	ProposalStateEnumStateUnspecified         ProposalStateEnum = "STATE_UNSPECIFIED"
	ProposalStateEnumBuyerReviewRequested     ProposalStateEnum = "BUYER_REVIEW_REQUESTED"
	ProposalStateEnumSellerReviewRequested    ProposalStateEnum = "SELLER_REVIEW_REQUESTED"
	ProposalStateEnumBuyerAcceptanceRequested ProposalStateEnum = "BUYER_ACCEPTANCE_REQUESTED"
	ProposalStateEnumFinalized                ProposalStateEnum = "FINALIZED"
	ProposalStateEnumTerminated               ProposalStateEnum = "TERMINATED"
)

type Proposal struct {
	BilledBuyer                *string                                 `json:"billedBuyer,omitempty"`
	Buyer                      *string                                 `json:"buyer,omitempty"`
	BuyerContacts              []Contact                               `json:"buyerContacts,omitempty"`
	BuyerPrivateData           *PrivateData                            `json:"buyerPrivateData,omitempty"`
	Client                     *string                                 `json:"client,omitempty"`
	DealType                   *ProposalDealTypeEnum                   `json:"dealType,omitempty"`
	DisplayName                *string                                 `json:"displayName,omitempty"`
	IsRenegotiating            *bool                                   `json:"isRenegotiating,omitempty"`
	LastUpdaterOrCommentorRole *ProposalLastUpdaterOrCommentorRoleEnum `json:"lastUpdaterOrCommentorRole,omitempty"`
	Name                       *string                                 `json:"name,omitempty"`
	Notes                      []Note                                  `json:"notes,omitempty"`
	OriginatorRole             *ProposalOriginatorRoleEnum             `json:"originatorRole,omitempty"`
	PausingConsented           *bool                                   `json:"pausingConsented,omitempty"`
	ProposalRevision           *string                                 `json:"proposalRevision,omitempty"`
	PublisherProfile           *string                                 `json:"publisherProfile,omitempty"`
	SellerContacts             []Contact                               `json:"sellerContacts,omitempty"`
	State                      *ProposalStateEnum                      `json:"state,omitempty"`
	TermsAndConditions         *string                                 `json:"termsAndConditions,omitempty"`
	UpdateTime                 *string                                 `json:"updateTime,omitempty"`
}
