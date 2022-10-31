package shared




type EntitlementReasonEnum string

const (
    EntitlementReasonEnumFree EntitlementReasonEnum = "free"
EntitlementReasonEnumGroupLicense EntitlementReasonEnum = "groupLicense"
EntitlementReasonEnumUserPurchase EntitlementReasonEnum = "userPurchase"
)


type Entitlement struct {
    ProductID *string `json:"productId,omitempty"`
    Reason *EntitlementReasonEnum `json:"reason,omitempty"`
    
}

