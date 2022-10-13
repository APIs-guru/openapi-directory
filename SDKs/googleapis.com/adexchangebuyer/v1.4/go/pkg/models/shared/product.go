package shared

type Product struct {
	BilledBuyer                   *Buyer                     `json:"billedBuyer"`
	Buyer                         *Buyer                     `json:"buyer"`
	CreationTimeMs                *string                    `json:"creationTimeMs"`
	CreatorContacts               []ContactInformation       `json:"creatorContacts"`
	CreatorRole                   *string                    `json:"creatorRole"`
	DeliveryControl               *DeliveryControl           `json:"deliveryControl"`
	FlightEndTimeMs               *string                    `json:"flightEndTimeMs"`
	FlightStartTimeMs             *string                    `json:"flightStartTimeMs"`
	HasCreatorSignedOff           *bool                      `json:"hasCreatorSignedOff"`
	InventorySource               *string                    `json:"inventorySource"`
	Kind                          *string                    `json:"kind"`
	Labels                        []MarketplaceLabel         `json:"labels"`
	LastUpdateTimeMs              *string                    `json:"lastUpdateTimeMs"`
	LegacyOfferID                 *string                    `json:"legacyOfferId"`
	MarketplacePublisherProfileID *string                    `json:"marketplacePublisherProfileId"`
	Name                          *string                    `json:"name"`
	PrivateAuctionID              *string                    `json:"privateAuctionId"`
	ProductID                     *string                    `json:"productId"`
	PublisherProfileID            *string                    `json:"publisherProfileId"`
	PublisherProvidedForecast     *PublisherProvidedForecast `json:"publisherProvidedForecast"`
	RevisionNumber                *string                    `json:"revisionNumber"`
	Seller                        *Seller                    `json:"seller"`
	SharedTargetings              []SharedTargeting          `json:"sharedTargetings"`
	State                         *string                    `json:"state"`
	SyndicationProduct            *string                    `json:"syndicationProduct"`
	Terms                         *DealTerms                 `json:"terms"`
	WebPropertyCode               *string                    `json:"webPropertyCode"`
}
