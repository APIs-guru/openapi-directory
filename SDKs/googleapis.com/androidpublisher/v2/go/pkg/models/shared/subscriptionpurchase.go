package shared

// SubscriptionPurchase
// A SubscriptionPurchase resource indicates the status of a user's subscription purchase.
type SubscriptionPurchase struct {
	AutoRenewing               *bool
	CancelReason               *int32
	CancelSurveyResult         *SubscriptionCancelSurveyResult
	CountryCode                *string
	DeveloperPayload           *string
	EmailAddress               *string
	ExpiryTimeMillis           *string
	FamilyName                 *string
	GivenName                  *string
	Kind                       *string
	LinkedPurchaseToken        *string
	OrderID                    *string
	PaymentState               *int32
	PriceAmountMicros          *string
	PriceChange                *SubscriptionPriceChange
	PriceCurrencyCode          *string
	ProfileID                  *string
	ProfileName                *string
	PurchaseType               *int32
	StartTimeMillis            *string
	UserCancellationTimeMillis *string
}
