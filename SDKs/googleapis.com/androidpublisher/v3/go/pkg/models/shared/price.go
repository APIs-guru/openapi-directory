package shared

type Price struct {
	Currency    *string `json:"currency,omitempty"`
	PriceMicros *string `json:"priceMicros,omitempty"`
}
