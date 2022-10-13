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
	BilledBuyer                *string                                 `json:"billedBuyer"`
	Buyer                      *string                                 `json:"buyer"`
	BuyerContacts              []Contact                               `json:"buyerContacts"`
	BuyerPrivateData           *PrivateData                            `json:"buyerPrivateData"`
	Client                     *string                                 `json:"client"`
	DealType                   *ProposalDealTypeEnum                   `json:"dealType"`
	DisplayName                *string                                 `json:"displayName"`
	IsRenegotiating            *bool                                   `json:"isRenegotiating"`
	LastUpdaterOrCommentorRole *ProposalLastUpdaterOrCommentorRoleEnum `json:"lastUpdaterOrCommentorRole"`
	Name                       *string                                 `json:"name"`
	Notes                      []Note                                  `json:"notes"`
	OriginatorRole             *ProposalOriginatorRoleEnum             `json:"originatorRole"`
	PausingConsented           *bool                                   `json:"pausingConsented"`
	ProposalRevision           *string                                 `json:"proposalRevision"`
	PublisherProfile           *string                                 `json:"publisherProfile"`
	SellerContacts             []Contact                               `json:"sellerContacts"`
	State                      *ProposalStateEnum                      `json:"state"`
	TermsAndConditions         *string                                 `json:"termsAndConditions"`
	UpdateTime                 *string                                 `json:"updateTime"`
}
