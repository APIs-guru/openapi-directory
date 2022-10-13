package shared

type ItvSubscriptionFullPriceRenewal struct {
	FullPriceRenewal bool   `json:"fullPriceRenewal"`
	Reason           string `json:"reason"`
}
