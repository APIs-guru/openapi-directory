package shared



type SetPaymentPolicyResponse struct {
    CategoryTypes []CategoryType `json:"categoryTypes,omitempty"`
    Deposit *Deposit `json:"deposit,omitempty"`
    Description *string `json:"description,omitempty"`
    FullPaymentDueIn *TimeDuration `json:"fullPaymentDueIn,omitempty"`
    ImmediatePay *bool `json:"immediatePay,omitempty"`
    MarketplaceID *string `json:"marketplaceId,omitempty"`
    Name *string `json:"name,omitempty"`
    PaymentInstructions *string `json:"paymentInstructions,omitempty"`
    PaymentMethods []PaymentMethod `json:"paymentMethods,omitempty"`
    PaymentPolicyID *string `json:"paymentPolicyId,omitempty"`
    Warnings []Error `json:"warnings,omitempty"`
    
}

