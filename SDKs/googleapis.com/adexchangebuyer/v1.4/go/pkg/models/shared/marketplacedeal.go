package shared

type MarketplaceDeal struct {
	BuyerPrivateData               *PrivateData         `json:"buyerPrivateData,omitempty"`
	CreationTimeMs                 *string              `json:"creationTimeMs,omitempty"`
	CreativePreApprovalPolicy      *string              `json:"creativePreApprovalPolicy,omitempty"`
	CreativeSafeFrameCompatibility *string              `json:"creativeSafeFrameCompatibility,omitempty"`
	DealID                         *string              `json:"dealId,omitempty"`
	DealServingMetadata            *DealServingMetadata `json:"dealServingMetadata,omitempty"`
	DeliveryControl                *DeliveryControl     `json:"deliveryControl,omitempty"`
	ExternalDealID                 *string              `json:"externalDealId,omitempty"`
	FlightEndTimeMs                *string              `json:"flightEndTimeMs,omitempty"`
	FlightStartTimeMs              *string              `json:"flightStartTimeMs,omitempty"`
	InventoryDescription           *string              `json:"inventoryDescription,omitempty"`
	IsRfpTemplate                  *bool                `json:"isRfpTemplate,omitempty"`
	IsSetupComplete                *bool                `json:"isSetupComplete,omitempty"`
	Kind                           *string              `json:"kind,omitempty"`
	LastUpdateTimeMs               *string              `json:"lastUpdateTimeMs,omitempty"`
	MakegoodRequestedReason        *string              `json:"makegoodRequestedReason,omitempty"`
	Name                           *string              `json:"name,omitempty"`
	ProductID                      *string              `json:"productId,omitempty"`
	ProductRevisionNumber          *string              `json:"productRevisionNumber,omitempty"`
	ProgrammaticCreativeSource     *string              `json:"programmaticCreativeSource,omitempty"`
	ProposalID                     *string              `json:"proposalId,omitempty"`
	SellerContacts                 []ContactInformation `json:"sellerContacts,omitempty"`
	SharedTargetings               []SharedTargeting    `json:"sharedTargetings,omitempty"`
	SyndicationProduct             *string              `json:"syndicationProduct,omitempty"`
	Terms                          *DealTerms           `json:"terms,omitempty"`
	WebPropertyCode                *string              `json:"webPropertyCode,omitempty"`
}
