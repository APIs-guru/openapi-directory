package shared

// SendOfferToInterestedBuyersCollectionResponse
// The response object returned from a SendOfferToInterestedBuyers request.
type SendOfferToInterestedBuyersCollectionResponse struct {
	Offers []Offer `json:"offers,omitempty"`
}
