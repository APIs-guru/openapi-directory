package shared



type SavingsPlanOffering struct {
    Currency *CurrencyCodeEnum `json:"currency,omitempty"`
    Description *string `json:"description,omitempty"`
    DurationSeconds *int64 `json:"durationSeconds,omitempty"`
    OfferingID *string `json:"offeringId,omitempty"`
    Operation *string `json:"operation,omitempty"`
    PaymentOption *SavingsPlanPaymentOptionEnum `json:"paymentOption,omitempty"`
    PlanType *SavingsPlanTypeEnum `json:"planType,omitempty"`
    ProductTypes []SavingsPlanProductTypeEnum `json:"productTypes,omitempty"`
    Properties *interface{} `json:"properties,omitempty"`
    ServiceCode *string `json:"serviceCode,omitempty"`
    UsageType *string `json:"usageType,omitempty"`
    
}

