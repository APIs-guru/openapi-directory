package shared

// Price
// Definition of a price, i.e. currency and units.
type Price struct {
	Currency    *string `json:"currency,omitempty"`
	PriceMicros *string `json:"priceMicros,omitempty"`
}
