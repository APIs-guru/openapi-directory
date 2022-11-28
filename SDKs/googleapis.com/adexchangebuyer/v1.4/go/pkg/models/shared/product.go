package shared

// Product
// A product is segment of inventory that a seller wishes to sell. It is associated with certain terms and targeting information which helps buyer know more about the inventory. Each field in a product can have one of the following setting:
//
// (readonly) - It is an error to try and set this field. (buyer-readonly) - Only the seller can set this field. (seller-readonly) - Only the buyer can set this field. (updatable) - The field is updatable at all times by either buyer or the seller.
type Product struct {
	BilledBuyer                   *Buyer                     `json:"billedBuyer,omitempty"`
	Buyer                         *Buyer                     `json:"buyer,omitempty"`
	CreationTimeMs                *string                    `json:"creationTimeMs,omitempty"`
	CreatorContacts               []ContactInformation       `json:"creatorContacts,omitempty"`
	CreatorRole                   *string                    `json:"creatorRole,omitempty"`
	DeliveryControl               *DeliveryControl           `json:"deliveryControl,omitempty"`
	FlightEndTimeMs               *string                    `json:"flightEndTimeMs,omitempty"`
	FlightStartTimeMs             *string                    `json:"flightStartTimeMs,omitempty"`
	HasCreatorSignedOff           *bool                      `json:"hasCreatorSignedOff,omitempty"`
	InventorySource               *string                    `json:"inventorySource,omitempty"`
	Kind                          *string                    `json:"kind,omitempty"`
	Labels                        []MarketplaceLabel         `json:"labels,omitempty"`
	LastUpdateTimeMs              *string                    `json:"lastUpdateTimeMs,omitempty"`
	LegacyOfferID                 *string                    `json:"legacyOfferId,omitempty"`
	MarketplacePublisherProfileID *string                    `json:"marketplacePublisherProfileId,omitempty"`
	Name                          *string                    `json:"name,omitempty"`
	PrivateAuctionID              *string                    `json:"privateAuctionId,omitempty"`
	ProductID                     *string                    `json:"productId,omitempty"`
	PublisherProfileID            *string                    `json:"publisherProfileId,omitempty"`
	PublisherProvidedForecast     *PublisherProvidedForecast `json:"publisherProvidedForecast,omitempty"`
	RevisionNumber                *string                    `json:"revisionNumber,omitempty"`
	Seller                        *Seller                    `json:"seller,omitempty"`
	SharedTargetings              []SharedTargeting          `json:"sharedTargetings,omitempty"`
	State                         *string                    `json:"state,omitempty"`
	SyndicationProduct            *string                    `json:"syndicationProduct,omitempty"`
	Terms                         *DealTerms                 `json:"terms,omitempty"`
	WebPropertyCode               *string                    `json:"webPropertyCode,omitempty"`
}
