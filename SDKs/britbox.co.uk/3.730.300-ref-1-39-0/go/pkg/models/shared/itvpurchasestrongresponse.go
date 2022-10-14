package shared

type ItvPurchaseStrongResponse struct {
	ClientSecret   *string `json:"clientSecret,omitempty"`
	CustomerID     *string `json:"customerId,omitempty"`
	IntentID       *string `json:"intentId,omitempty"`
	IntentType     *string `json:"intentType,omitempty"`
	PlanID         *string `json:"planId,omitempty"`
	Status         *string `json:"status,omitempty"`
	SubscriptionID *string `json:"subscriptionId,omitempty"`
}
