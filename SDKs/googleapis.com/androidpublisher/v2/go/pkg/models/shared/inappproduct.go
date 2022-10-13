package shared

type InAppProduct struct {
	DefaultLanguage    *string                        `json:"defaultLanguage"`
	DefaultPrice       *Price                         `json:"defaultPrice"`
	GracePeriod        *string                        `json:"gracePeriod"`
	Listings           map[string]InAppProductListing `json:"listings"`
	PackageName        *string                        `json:"packageName"`
	Prices             map[string]Price               `json:"prices"`
	PurchaseType       *string                        `json:"purchaseType"`
	Sku                *string                        `json:"sku"`
	Status             *string                        `json:"status"`
	SubscriptionPeriod *string                        `json:"subscriptionPeriod"`
	TrialPeriod        *string                        `json:"trialPeriod"`
}
