package shared

type CreateOffersRequest struct {
	AllowCounterOffer *bool         `json:"allowCounterOffer"`
	Message           *string       `json:"message"`
	OfferDuration     *TimeDuration `json:"offerDuration"`
	OfferedItems      []OfferedItem `json:"offeredItems"`
}
