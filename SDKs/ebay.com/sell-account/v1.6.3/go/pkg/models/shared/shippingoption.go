package shared



type ShippingOption struct {
    CostType *string `json:"costType,omitempty"`
    InsuranceFee *Amount `json:"insuranceFee,omitempty"`
    InsuranceOffered *bool `json:"insuranceOffered,omitempty"`
    OptionType *string `json:"optionType,omitempty"`
    PackageHandlingCost *Amount `json:"packageHandlingCost,omitempty"`
    RateTableID *string `json:"rateTableId,omitempty"`
    ShippingServices []ShippingService `json:"shippingServices,omitempty"`
    
}

