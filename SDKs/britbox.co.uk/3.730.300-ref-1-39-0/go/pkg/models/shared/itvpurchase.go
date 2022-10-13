package shared

type ItvPurchase struct {
	CustomerID     *string `json:"customerId"`
	PlanID         string  `json:"planId"`
	SubscriptionID *string `json:"subscriptionId"`
}
