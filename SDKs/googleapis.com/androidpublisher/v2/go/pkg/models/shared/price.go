package shared

type Price struct {
	Currency    *string `json:"currency"`
	PriceMicros *string `json:"priceMicros"`
}
