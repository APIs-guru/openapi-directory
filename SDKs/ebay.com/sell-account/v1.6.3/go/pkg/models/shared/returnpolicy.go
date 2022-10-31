package shared



type ReturnPolicy struct {
    CategoryTypes []CategoryType `json:"categoryTypes,omitempty"`
    Description *string `json:"description,omitempty"`
    ExtendedHolidayReturnsOffered *bool `json:"extendedHolidayReturnsOffered,omitempty"`
    InternationalOverride *InternationalReturnOverrideType `json:"internationalOverride,omitempty"`
    MarketplaceID *string `json:"marketplaceId,omitempty"`
    Name *string `json:"name,omitempty"`
    RefundMethod *string `json:"refundMethod,omitempty"`
    RestockingFeePercentage *string `json:"restockingFeePercentage,omitempty"`
    ReturnInstructions *string `json:"returnInstructions,omitempty"`
    ReturnMethod *string `json:"returnMethod,omitempty"`
    ReturnPeriod *TimeDuration `json:"returnPeriod,omitempty"`
    ReturnPolicyID *string `json:"returnPolicyId,omitempty"`
    ReturnShippingCostPayer *string `json:"returnShippingCostPayer,omitempty"`
    ReturnsAccepted *bool `json:"returnsAccepted,omitempty"`
    
}

