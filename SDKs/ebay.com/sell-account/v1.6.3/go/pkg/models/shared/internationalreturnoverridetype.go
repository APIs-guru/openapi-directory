package shared



type InternationalReturnOverrideType struct {
    ReturnMethod *string `json:"returnMethod,omitempty"`
    ReturnPeriod *TimeDuration `json:"returnPeriod,omitempty"`
    ReturnShippingCostPayer *string `json:"returnShippingCostPayer,omitempty"`
    ReturnsAccepted *bool `json:"returnsAccepted,omitempty"`
    
}

