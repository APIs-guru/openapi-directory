package shared

type ShippingOption struct {
	CostType            *string           `json:"costType"`
	InsuranceFee        *Amount           `json:"insuranceFee"`
	InsuranceOffered    *bool             `json:"insuranceOffered"`
	OptionType          *string           `json:"optionType"`
	PackageHandlingCost *Amount           `json:"packageHandlingCost"`
	RateTableID         *string           `json:"rateTableId"`
	ShippingServices    []ShippingService `json:"shippingServices"`
}
