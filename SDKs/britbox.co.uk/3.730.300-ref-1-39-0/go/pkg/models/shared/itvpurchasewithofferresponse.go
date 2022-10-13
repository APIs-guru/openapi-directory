package shared

type ItvPurchaseWithOfferResponse struct {
	ClientSecret    *string `json:"clientSecret"`
	CustomerID      *string `json:"customerId"`
	IntentID        *string `json:"intentId"`
	IntentType      *string `json:"intentType"`
	PaymentMethodID *string `json:"paymentMethodId"`
	Status          *string `json:"status"`
	SubscriptionID  *string `json:"subscriptionId"`
}
