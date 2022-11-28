package shared

// SavingsPlanOfferingRate
// Information about a Savings Plan offering rate.
type SavingsPlanOfferingRate struct {
	Operation           *string                         `json:"operation,omitempty"`
	ProductType         *SavingsPlanProductTypeEnum     `json:"productType,omitempty"`
	Properties          *interface{}                    `json:"properties,omitempty"`
	Rate                *string                         `json:"rate,omitempty"`
	SavingsPlanOffering *ParentSavingsPlanOffering      `json:"savingsPlanOffering,omitempty"`
	ServiceCode         *SavingsPlanRateServiceCodeEnum `json:"serviceCode,omitempty"`
	Unit                *SavingsPlanRateUnitEnum        `json:"unit,omitempty"`
	UsageType           *string                         `json:"usageType,omitempty"`
}
