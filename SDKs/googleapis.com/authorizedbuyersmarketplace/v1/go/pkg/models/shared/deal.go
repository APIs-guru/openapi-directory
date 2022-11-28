package shared

type DealDealTypeEnum string

const (
	DealDealTypeEnumDealTypeUnspecified    DealDealTypeEnum = "DEAL_TYPE_UNSPECIFIED"
	DealDealTypeEnumPreferredDeal          DealDealTypeEnum = "PREFERRED_DEAL"
	DealDealTypeEnumPrivateAuction         DealDealTypeEnum = "PRIVATE_AUCTION"
	DealDealTypeEnumProgrammaticGuaranteed DealDealTypeEnum = "PROGRAMMATIC_GUARANTEED"
)

// DealInput
// A deal represents a segment of inventory for displaying ads that contains the terms and targeting information that is used for serving as well as the deal stats and status. Note: A proposal may contain multiple deals.
type DealInput struct {
	EstimatedGrossSpend         *Money                       `json:"estimatedGrossSpend,omitempty"`
	FlightEndTime               *string                      `json:"flightEndTime,omitempty"`
	FlightStartTime             *string                      `json:"flightStartTime,omitempty"`
	Name                        *string                      `json:"name,omitempty"`
	PreferredDealTerms          *PreferredDealTerms          `json:"preferredDealTerms,omitempty"`
	PrivateAuctionTerms         *PrivateAuctionTermsInput    `json:"privateAuctionTerms,omitempty"`
	ProgrammaticGuaranteedTerms *ProgrammaticGuaranteedTerms `json:"programmaticGuaranteedTerms,omitempty"`
	PublisherProfile            *string                      `json:"publisherProfile,omitempty"`
	SellerTimeZone              *TimeZone                    `json:"sellerTimeZone,omitempty"`
	Targeting                   *MarketplaceTargeting        `json:"targeting,omitempty"`
}

// Deal
// A deal represents a segment of inventory for displaying ads that contains the terms and targeting information that is used for serving as well as the deal stats and status. Note: A proposal may contain multiple deals.
type Deal struct {
	BilledBuyer                 *string                      `json:"billedBuyer,omitempty"`
	Buyer                       *string                      `json:"buyer,omitempty"`
	Client                      *string                      `json:"client,omitempty"`
	CreateTime                  *string                      `json:"createTime,omitempty"`
	CreativeRequirements        *CreativeRequirements        `json:"creativeRequirements,omitempty"`
	DealType                    *DealDealTypeEnum            `json:"dealType,omitempty"`
	DeliveryControl             *DeliveryControl             `json:"deliveryControl,omitempty"`
	Description                 *string                      `json:"description,omitempty"`
	DisplayName                 *string                      `json:"displayName,omitempty"`
	EstimatedGrossSpend         *Money                       `json:"estimatedGrossSpend,omitempty"`
	FlightEndTime               *string                      `json:"flightEndTime,omitempty"`
	FlightStartTime             *string                      `json:"flightStartTime,omitempty"`
	Name                        *string                      `json:"name,omitempty"`
	PreferredDealTerms          *PreferredDealTerms          `json:"preferredDealTerms,omitempty"`
	PrivateAuctionTerms         *PrivateAuctionTerms         `json:"privateAuctionTerms,omitempty"`
	ProgrammaticGuaranteedTerms *ProgrammaticGuaranteedTerms `json:"programmaticGuaranteedTerms,omitempty"`
	ProposalRevision            *string                      `json:"proposalRevision,omitempty"`
	PublisherProfile            *string                      `json:"publisherProfile,omitempty"`
	SellerTimeZone              *TimeZone                    `json:"sellerTimeZone,omitempty"`
	Targeting                   *MarketplaceTargeting        `json:"targeting,omitempty"`
	UpdateTime                  *string                      `json:"updateTime,omitempty"`
}
