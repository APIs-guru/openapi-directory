package shared

type NegotiatedPricePolicy struct {
	BestOfferAutoAcceptEnabled  *bool   `json:"bestOfferAutoAcceptEnabled"`
	BestOfferAutoDeclineEnabled *bool   `json:"bestOfferAutoDeclineEnabled"`
	BestOfferCounterEnabled     *bool   `json:"bestOfferCounterEnabled"`
	CategoryID                  *string `json:"categoryId"`
	CategoryTreeID              *string `json:"categoryTreeId"`
}
