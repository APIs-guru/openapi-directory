package shared

type PlanPurchaseTypeEnum string

const (
	PlanPurchaseTypeEnumFree         PlanPurchaseTypeEnum = "Free"
	PlanPurchaseTypeEnumSubscription PlanPurchaseTypeEnum = "Subscription"
)

type PlanPurchase struct {
	ID             *string              `json:"id"`
	Price          *float32             `json:"price"`
	SubscriptionID *string              `json:"subscriptionId"`
	Title          string               `json:"title"`
	Type           PlanPurchaseTypeEnum `json:"type"`
}
