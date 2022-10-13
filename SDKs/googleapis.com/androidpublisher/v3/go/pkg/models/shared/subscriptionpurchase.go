package shared

type SubscriptionPurchase struct {
	AcknowledgementState        *int32                          `json:"acknowledgementState"`
	AutoRenewing                *bool                           `json:"autoRenewing"`
	AutoResumeTimeMillis        *string                         `json:"autoResumeTimeMillis"`
	CancelReason                *int32                          `json:"cancelReason"`
	CancelSurveyResult          *SubscriptionCancelSurveyResult `json:"cancelSurveyResult"`
	CountryCode                 *string                         `json:"countryCode"`
	DeveloperPayload            *string                         `json:"developerPayload"`
	EmailAddress                *string                         `json:"emailAddress"`
	ExpiryTimeMillis            *string                         `json:"expiryTimeMillis"`
	ExternalAccountID           *string                         `json:"externalAccountId"`
	FamilyName                  *string                         `json:"familyName"`
	GivenName                   *string                         `json:"givenName"`
	IntroductoryPriceInfo       *IntroductoryPriceInfo          `json:"introductoryPriceInfo"`
	Kind                        *string                         `json:"kind"`
	LinkedPurchaseToken         *string                         `json:"linkedPurchaseToken"`
	ObfuscatedExternalAccountID *string                         `json:"obfuscatedExternalAccountId"`
	ObfuscatedExternalProfileID *string                         `json:"obfuscatedExternalProfileId"`
	OrderID                     *string                         `json:"orderId"`
	PaymentState                *int32                          `json:"paymentState"`
	PriceAmountMicros           *string                         `json:"priceAmountMicros"`
	PriceChange                 *SubscriptionPriceChange        `json:"priceChange"`
	PriceCurrencyCode           *string                         `json:"priceCurrencyCode"`
	ProfileID                   *string                         `json:"profileId"`
	ProfileName                 *string                         `json:"profileName"`
	PromotionCode               *string                         `json:"promotionCode"`
	PromotionType               *int32                          `json:"promotionType"`
	PurchaseType                *int32                          `json:"purchaseType"`
	StartTimeMillis             *string                         `json:"startTimeMillis"`
	UserCancellationTimeMillis  *string                         `json:"userCancellationTimeMillis"`
}
