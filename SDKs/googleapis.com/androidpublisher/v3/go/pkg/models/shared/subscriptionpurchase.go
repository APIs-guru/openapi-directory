package shared

type SubscriptionPurchase struct {
	AcknowledgementState        *int32                          `json:"acknowledgementState,omitempty"`
	AutoRenewing                *bool                           `json:"autoRenewing,omitempty"`
	AutoResumeTimeMillis        *string                         `json:"autoResumeTimeMillis,omitempty"`
	CancelReason                *int32                          `json:"cancelReason,omitempty"`
	CancelSurveyResult          *SubscriptionCancelSurveyResult `json:"cancelSurveyResult,omitempty"`
	CountryCode                 *string                         `json:"countryCode,omitempty"`
	DeveloperPayload            *string                         `json:"developerPayload,omitempty"`
	EmailAddress                *string                         `json:"emailAddress,omitempty"`
	ExpiryTimeMillis            *string                         `json:"expiryTimeMillis,omitempty"`
	ExternalAccountID           *string                         `json:"externalAccountId,omitempty"`
	FamilyName                  *string                         `json:"familyName,omitempty"`
	GivenName                   *string                         `json:"givenName,omitempty"`
	IntroductoryPriceInfo       *IntroductoryPriceInfo          `json:"introductoryPriceInfo,omitempty"`
	Kind                        *string                         `json:"kind,omitempty"`
	LinkedPurchaseToken         *string                         `json:"linkedPurchaseToken,omitempty"`
	ObfuscatedExternalAccountID *string                         `json:"obfuscatedExternalAccountId,omitempty"`
	ObfuscatedExternalProfileID *string                         `json:"obfuscatedExternalProfileId,omitempty"`
	OrderID                     *string                         `json:"orderId,omitempty"`
	PaymentState                *int32                          `json:"paymentState,omitempty"`
	PriceAmountMicros           *string                         `json:"priceAmountMicros,omitempty"`
	PriceChange                 *SubscriptionPriceChange        `json:"priceChange,omitempty"`
	PriceCurrencyCode           *string                         `json:"priceCurrencyCode,omitempty"`
	ProfileID                   *string                         `json:"profileId,omitempty"`
	ProfileName                 *string                         `json:"profileName,omitempty"`
	PromotionCode               *string                         `json:"promotionCode,omitempty"`
	PromotionType               *int32                          `json:"promotionType,omitempty"`
	PurchaseType                *int32                          `json:"purchaseType,omitempty"`
	StartTimeMillis             *string                         `json:"startTimeMillis,omitempty"`
	UserCancellationTimeMillis  *string                         `json:"userCancellationTimeMillis,omitempty"`
}
