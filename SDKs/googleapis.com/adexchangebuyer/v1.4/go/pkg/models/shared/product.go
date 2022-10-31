package shared



type Product struct {
    BilledBuyer *Buyer `json:"billedBuyer,omitempty"`
    Buyer *Buyer `json:"buyer,omitempty"`
    CreationTimeMs *string `json:"creationTimeMs,omitempty"`
    CreatorContacts []ContactInformation `json:"creatorContacts,omitempty"`
    CreatorRole *string `json:"creatorRole,omitempty"`
    DeliveryControl *DeliveryControl `json:"deliveryControl,omitempty"`
    FlightEndTimeMs *string `json:"flightEndTimeMs,omitempty"`
    FlightStartTimeMs *string `json:"flightStartTimeMs,omitempty"`
    HasCreatorSignedOff *bool `json:"hasCreatorSignedOff,omitempty"`
    InventorySource *string `json:"inventorySource,omitempty"`
    Kind *string `json:"kind,omitempty"`
    Labels []MarketplaceLabel `json:"labels,omitempty"`
    LastUpdateTimeMs *string `json:"lastUpdateTimeMs,omitempty"`
    LegacyOfferID *string `json:"legacyOfferId,omitempty"`
    MarketplacePublisherProfileID *string `json:"marketplacePublisherProfileId,omitempty"`
    Name *string `json:"name,omitempty"`
    PrivateAuctionID *string `json:"privateAuctionId,omitempty"`
    ProductID *string `json:"productId,omitempty"`
    PublisherProfileID *string `json:"publisherProfileId,omitempty"`
    PublisherProvidedForecast *PublisherProvidedForecast `json:"publisherProvidedForecast,omitempty"`
    RevisionNumber *string `json:"revisionNumber,omitempty"`
    Seller *Seller `json:"seller,omitempty"`
    SharedTargetings []SharedTargeting `json:"sharedTargetings,omitempty"`
    State *string `json:"state,omitempty"`
    SyndicationProduct *string `json:"syndicationProduct,omitempty"`
    Terms *DealTerms `json:"terms,omitempty"`
    WebPropertyCode *string `json:"webPropertyCode,omitempty"`
    
}

