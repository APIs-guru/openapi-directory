package shared

type ProductSetProductSetBehaviorEnum string

const (
	ProductSetProductSetBehaviorEnumUnknown     ProductSetProductSetBehaviorEnum = "unknown"
	ProductSetProductSetBehaviorEnumWhitelist   ProductSetProductSetBehaviorEnum = "whitelist"
	ProductSetProductSetBehaviorEnumIncludeAll  ProductSetProductSetBehaviorEnum = "includeAll"
	ProductSetProductSetBehaviorEnumAllApproved ProductSetProductSetBehaviorEnum = "allApproved"
)

type ProductSet struct {
	ProductID          []string                          `json:"productId"`
	ProductSetBehavior *ProductSetProductSetBehaviorEnum `json:"productSetBehavior"`
	ProductVisibility  []ProductVisibility               `json:"productVisibility"`
}
