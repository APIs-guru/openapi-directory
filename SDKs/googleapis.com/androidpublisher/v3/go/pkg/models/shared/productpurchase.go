package shared

type ProductPurchase struct {
	AcknowledgementState        *int32  `json:"acknowledgementState"`
	ConsumptionState            *int32  `json:"consumptionState"`
	DeveloperPayload            *string `json:"developerPayload"`
	Kind                        *string `json:"kind"`
	ObfuscatedExternalAccountID *string `json:"obfuscatedExternalAccountId"`
	ObfuscatedExternalProfileID *string `json:"obfuscatedExternalProfileId"`
	OrderID                     *string `json:"orderId"`
	ProductID                   *string `json:"productId"`
	PurchaseState               *int32  `json:"purchaseState"`
	PurchaseTimeMillis          *string `json:"purchaseTimeMillis"`
	PurchaseToken               *string `json:"purchaseToken"`
	PurchaseType                *int32  `json:"purchaseType"`
	Quantity                    *int32  `json:"quantity"`
	RegionCode                  *string `json:"regionCode"`
}
