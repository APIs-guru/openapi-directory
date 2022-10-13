package shared

type EntitlementReasonEnum string

const (
	EntitlementReasonEnumFree         EntitlementReasonEnum = "free"
	EntitlementReasonEnumGroupLicense EntitlementReasonEnum = "groupLicense"
	EntitlementReasonEnumUserPurchase EntitlementReasonEnum = "userPurchase"
)

type Entitlement struct {
	ProductID *string                `json:"productId"`
	Reason    *EntitlementReasonEnum `json:"reason"`
}
