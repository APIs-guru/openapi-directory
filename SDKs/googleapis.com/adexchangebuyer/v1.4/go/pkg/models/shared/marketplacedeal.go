package shared

type MarketplaceDeal struct {
	BuyerPrivateData               *PrivateData         `json:"buyerPrivateData"`
	CreationTimeMs                 *string              `json:"creationTimeMs"`
	CreativePreApprovalPolicy      *string              `json:"creativePreApprovalPolicy"`
	CreativeSafeFrameCompatibility *string              `json:"creativeSafeFrameCompatibility"`
	DealID                         *string              `json:"dealId"`
	DealServingMetadata            *DealServingMetadata `json:"dealServingMetadata"`
	DeliveryControl                *DeliveryControl     `json:"deliveryControl"`
	ExternalDealID                 *string              `json:"externalDealId"`
	FlightEndTimeMs                *string              `json:"flightEndTimeMs"`
	FlightStartTimeMs              *string              `json:"flightStartTimeMs"`
	InventoryDescription           *string              `json:"inventoryDescription"`
	IsRfpTemplate                  *bool                `json:"isRfpTemplate"`
	IsSetupComplete                *bool                `json:"isSetupComplete"`
	Kind                           *string              `json:"kind"`
	LastUpdateTimeMs               *string              `json:"lastUpdateTimeMs"`
	MakegoodRequestedReason        *string              `json:"makegoodRequestedReason"`
	Name                           *string              `json:"name"`
	ProductID                      *string              `json:"productId"`
	ProductRevisionNumber          *string              `json:"productRevisionNumber"`
	ProgrammaticCreativeSource     *string              `json:"programmaticCreativeSource"`
	ProposalID                     *string              `json:"proposalId"`
	SellerContacts                 []ContactInformation `json:"sellerContacts"`
	SharedTargetings               []SharedTargeting    `json:"sharedTargetings"`
	SyndicationProduct             *string              `json:"syndicationProduct"`
	Terms                          *DealTerms           `json:"terms"`
	WebPropertyCode                *string              `json:"webPropertyCode"`
}
