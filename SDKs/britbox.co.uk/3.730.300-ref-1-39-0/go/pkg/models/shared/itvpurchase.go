package shared

type ItvPurchase struct {
	CustomerID     *string `json:"customerId,omitempty"`
	PlanID         string  `json:"planId"`
	SubscriptionID *string `json:"subscriptionId,omitempty"`
}
