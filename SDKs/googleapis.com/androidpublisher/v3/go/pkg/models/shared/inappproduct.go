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

// InAppProduct
// An in-app product. The resource for InappproductsService.
type InAppProduct struct {
	DefaultLanguage                          *string                                 `json:"defaultLanguage,omitempty"`
	DefaultPrice                             *Price                                  `json:"defaultPrice,omitempty"`
	GracePeriod                              *string                                 `json:"gracePeriod,omitempty"`
	Listings                                 map[string]InAppProductListing          `json:"listings,omitempty"`
	ManagedProductTaxesAndComplianceSettings *ManagedProductTaxAndComplianceSettings `json:"managedProductTaxesAndComplianceSettings,omitempty"`
	PackageName                              *string                                 `json:"packageName,omitempty"`
	Prices                                   map[string]Price                        `json:"prices,omitempty"`
	PurchaseType                             *InAppProductPurchaseTypeEnum           `json:"purchaseType,omitempty"`
	Sku                                      *string                                 `json:"sku,omitempty"`
	Status                                   *InAppProductStatusEnum                 `json:"status,omitempty"`
	SubscriptionPeriod                       *string                                 `json:"subscriptionPeriod,omitempty"`
	SubscriptionTaxesAndComplianceSettings   *SubscriptionTaxAndComplianceSettings   `json:"subscriptionTaxesAndComplianceSettings,omitempty"`
	TrialPeriod                              *string                                 `json:"trialPeriod,omitempty"`
}
