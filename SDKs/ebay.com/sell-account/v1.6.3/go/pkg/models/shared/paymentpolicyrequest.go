package shared



type PaymentPolicyRequest struct {
    CategoryTypes []CategoryType `json:"categoryTypes,omitempty"`
    Deposit *Deposit `json:"deposit,omitempty"`
    Description *string `json:"description,omitempty"`
    FullPaymentDueIn *TimeDuration `json:"fullPaymentDueIn,omitempty"`
    ImmediatePay *bool `json:"immediatePay,omitempty"`
    MarketplaceID *string `json:"marketplaceId,omitempty"`
    Name *string `json:"name,omitempty"`
    PaymentInstructions *string `json:"paymentInstructions,omitempty"`
    PaymentMethods []PaymentMethod `json:"paymentMethods,omitempty"`
    
}

