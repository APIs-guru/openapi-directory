package shared

// OfferDetails
// Offer details information related to a purchase line item.
type OfferDetails struct {
	BasePlanID *string  `json:"basePlanId,omitempty"`
	OfferID    *string  `json:"offerId,omitempty"`
	OfferTags  []string `json:"offerTags,omitempty"`
}
