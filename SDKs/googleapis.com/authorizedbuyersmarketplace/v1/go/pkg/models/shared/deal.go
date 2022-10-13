package shared

type DealDealTypeEnum string

const (
	DealDealTypeEnumDealTypeUnspecified    DealDealTypeEnum = "DEAL_TYPE_UNSPECIFIED"
	DealDealTypeEnumPreferredDeal          DealDealTypeEnum = "PREFERRED_DEAL"
	DealDealTypeEnumPrivateAuction         DealDealTypeEnum = "PRIVATE_AUCTION"
	DealDealTypeEnumProgrammaticGuaranteed DealDealTypeEnum = "PROGRAMMATIC_GUARANTEED"
)

type Deal struct {
	BilledBuyer                 *string                      `json:"billedBuyer"`
	Buyer                       *string                      `json:"buyer"`
	Client                      *string                      `json:"client"`
	CreateTime                  *string                      `json:"createTime"`
	CreativeRequirements        *CreativeRequirements        `json:"creativeRequirements"`
	DealType                    *DealDealTypeEnum            `json:"dealType"`
	DeliveryControl             *DeliveryControl             `json:"deliveryControl"`
	Description                 *string                      `json:"description"`
	DisplayName                 *string                      `json:"displayName"`
	EstimatedGrossSpend         *Money                       `json:"estimatedGrossSpend"`
	FlightEndTime               *string                      `json:"flightEndTime"`
	FlightStartTime             *string                      `json:"flightStartTime"`
	Name                        *string                      `json:"name"`
	PreferredDealTerms          *PreferredDealTerms          `json:"preferredDealTerms"`
	PrivateAuctionTerms         *PrivateAuctionTerms         `json:"privateAuctionTerms"`
	ProgrammaticGuaranteedTerms *ProgrammaticGuaranteedTerms `json:"programmaticGuaranteedTerms"`
	ProposalRevision            *string                      `json:"proposalRevision"`
	PublisherProfile            *string                      `json:"publisherProfile"`
	SellerTimeZone              *TimeZone                    `json:"sellerTimeZone"`
	Targeting                   *MarketplaceTargeting        `json:"targeting"`
	UpdateTime                  *string                      `json:"updateTime"`
}
