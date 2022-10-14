package shared

type ProductSetProductSetBehaviorEnum string

const (
	ProductSetProductSetBehaviorEnumUnknown     ProductSetProductSetBehaviorEnum = "unknown"
	ProductSetProductSetBehaviorEnumWhitelist   ProductSetProductSetBehaviorEnum = "whitelist"
	ProductSetProductSetBehaviorEnumIncludeAll  ProductSetProductSetBehaviorEnum = "includeAll"
	ProductSetProductSetBehaviorEnumAllApproved ProductSetProductSetBehaviorEnum = "allApproved"
)

type ProductSet struct {
	ProductID          []string                          `json:"productId,omitempty"`
	ProductSetBehavior *ProductSetProductSetBehaviorEnum `json:"productSetBehavior,omitempty"`
	ProductVisibility  []ProductVisibility               `json:"productVisibility,omitempty"`
}
