package shared

type ItvPurchaseStrongResponse struct {
	ClientSecret   *string `json:"clientSecret"`
	CustomerID     *string `json:"customerId"`
	IntentID       *string `json:"intentId"`
	IntentType     *string `json:"intentType"`
	PlanID         *string `json:"planId"`
	Status         *string `json:"status"`
	SubscriptionID *string `json:"subscriptionId"`
}
