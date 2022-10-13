package shared

type Offer struct {
	AllowCounterOffer *bool         `json:"allowCounterOffer"`
	Buyer             *User         `json:"buyer"`
	CreationDate      *string       `json:"creationDate"`
	InitiatedBy       *string       `json:"initiatedBy"`
	LastModifiedDate  *string       `json:"lastModifiedDate"`
	Message           *string       `json:"message"`
	OfferDuration     *TimeDuration `json:"offerDuration"`
	OfferID           *string       `json:"offerId"`
	OfferStatus       *string       `json:"offerStatus"`
	OfferType         *string       `json:"offerType"`
	OfferedItems      []OfferedItem `json:"offeredItems"`
	Revision          *string       `json:"revision"`
}
