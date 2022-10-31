package shared



type InAppProduct struct {
    DefaultLanguage *string `json:"defaultLanguage,omitempty"`
    DefaultPrice *Price `json:"defaultPrice,omitempty"`
    GracePeriod *string `json:"gracePeriod,omitempty"`
    Listings map[string]InAppProductListing `json:"listings,omitempty"`
    PackageName *string `json:"packageName,omitempty"`
    Prices map[string]Price `json:"prices,omitempty"`
    PurchaseType *string `json:"purchaseType,omitempty"`
    Sku *string `json:"sku,omitempty"`
    Status *string `json:"status,omitempty"`
    SubscriptionPeriod *string `json:"subscriptionPeriod,omitempty"`
    TrialPeriod *string `json:"trialPeriod,omitempty"`
    
}

