package shared

type Offer struct {
	AllowCounterOffer *bool         `json:"allowCounterOffer,omitempty"`
	Buyer             *User         `json:"buyer,omitempty"`
	CreationDate      *string       `json:"creationDate,omitempty"`
	InitiatedBy       *string       `json:"initiatedBy,omitempty"`
	LastModifiedDate  *string       `json:"lastModifiedDate,omitempty"`
	Message           *string       `json:"message,omitempty"`
	OfferDuration     *TimeDuration `json:"offerDuration,omitempty"`
	OfferID           *string       `json:"offerId,omitempty"`
	OfferStatus       *string       `json:"offerStatus,omitempty"`
	OfferType         *string       `json:"offerType,omitempty"`
	OfferedItems      []OfferedItem `json:"offeredItems,omitempty"`
	Revision          *string       `json:"revision,omitempty"`
}
