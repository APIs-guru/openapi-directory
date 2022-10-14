package shared

type ProductPurchase struct {
	AcknowledgementState        *int32  `json:"acknowledgementState,omitempty"`
	ConsumptionState            *int32  `json:"consumptionState,omitempty"`
	DeveloperPayload            *string `json:"developerPayload,omitempty"`
	Kind                        *string `json:"kind,omitempty"`
	ObfuscatedExternalAccountID *string `json:"obfuscatedExternalAccountId,omitempty"`
	ObfuscatedExternalProfileID *string `json:"obfuscatedExternalProfileId,omitempty"`
	OrderID                     *string `json:"orderId,omitempty"`
	ProductID                   *string `json:"productId,omitempty"`
	PurchaseState               *int32  `json:"purchaseState,omitempty"`
	PurchaseTimeMillis          *string `json:"purchaseTimeMillis,omitempty"`
	PurchaseToken               *string `json:"purchaseToken,omitempty"`
	PurchaseType                *int32  `json:"purchaseType,omitempty"`
	Quantity                    *int32  `json:"quantity,omitempty"`
	RegionCode                  *string `json:"regionCode,omitempty"`
}
