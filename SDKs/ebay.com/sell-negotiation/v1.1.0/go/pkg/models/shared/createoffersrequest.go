package shared

// CreateOffersRequest
// This complex type contains the fields needed to create an offer to a buyer that is initiated by the seller.
type CreateOffersRequest struct {
	AllowCounterOffer *bool         `json:"allowCounterOffer,omitempty"`
	Message           *string       `json:"message,omitempty"`
	OfferDuration     *TimeDuration `json:"offerDuration,omitempty"`
	OfferedItems      []OfferedItem `json:"offeredItems,omitempty"`
}
