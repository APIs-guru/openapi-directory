package shared

type PlanPurchaseTypeEnum string

const (
	PlanPurchaseTypeEnumFree         PlanPurchaseTypeEnum = "Free"
	PlanPurchaseTypeEnumSubscription PlanPurchaseTypeEnum = "Subscription"
)

type PlanPurchase struct {
	ID             *string              `json:"id,omitempty"`
	Price          *float32             `json:"price,omitempty"`
	SubscriptionID *string              `json:"subscriptionId,omitempty"`
	Title          string               `json:"title"`
	Type           PlanPurchaseTypeEnum `json:"type"`
}
