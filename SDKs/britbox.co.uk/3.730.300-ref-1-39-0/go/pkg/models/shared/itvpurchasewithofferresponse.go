package shared



type ItvPurchaseWithOfferResponse struct {
    ClientSecret *string `json:"clientSecret,omitempty"`
    CustomerID *string `json:"customerId,omitempty"`
    IntentID *string `json:"intentId,omitempty"`
    IntentType *string `json:"intentType,omitempty"`
    PaymentMethodID *string `json:"paymentMethodId,omitempty"`
    Status *string `json:"status,omitempty"`
    SubscriptionID *string `json:"subscriptionId,omitempty"`
    
}

