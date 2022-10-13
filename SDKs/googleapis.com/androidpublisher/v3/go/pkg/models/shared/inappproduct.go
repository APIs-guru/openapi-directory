package shared

type InAppProductPurchaseTypeEnum string

const (
	InAppProductPurchaseTypeEnumPurchaseTypeUnspecified InAppProductPurchaseTypeEnum = "purchaseTypeUnspecified"
	InAppProductPurchaseTypeEnumManagedUser             InAppProductPurchaseTypeEnum = "managedUser"
	InAppProductPurchaseTypeEnumSubscription            InAppProductPurchaseTypeEnum = "subscription"
)

type InAppProductStatusEnum string

const (
	InAppProductStatusEnumStatusUnspecified InAppProductStatusEnum = "statusUnspecified"
	InAppProductStatusEnumActive            InAppProductStatusEnum = "active"
	InAppProductStatusEnumInactive          InAppProductStatusEnum = "inactive"
)

type InAppProduct struct {
	DefaultLanguage                          *string                                 `json:"defaultLanguage"`
	DefaultPrice                             *Price                                  `json:"defaultPrice"`
	GracePeriod                              *string                                 `json:"gracePeriod"`
	Listings                                 map[string]InAppProductListing          `json:"listings"`
	ManagedProductTaxesAndComplianceSettings *ManagedProductTaxAndComplianceSettings `json:"managedProductTaxesAndComplianceSettings"`
	PackageName                              *string                                 `json:"packageName"`
	Prices                                   map[string]Price                        `json:"prices"`
	PurchaseType                             *InAppProductPurchaseTypeEnum           `json:"purchaseType"`
	Sku                                      *string                                 `json:"sku"`
	Status                                   *InAppProductStatusEnum                 `json:"status"`
	SubscriptionPeriod                       *string                                 `json:"subscriptionPeriod"`
	SubscriptionTaxesAndComplianceSettings   *SubscriptionTaxAndComplianceSettings   `json:"subscriptionTaxesAndComplianceSettings"`
	TrialPeriod                              *string                                 `json:"trialPeriod"`
}
