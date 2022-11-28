package shared

// SavingsPlanRate
// Information about a Savings Plan rate.
type SavingsPlanRate struct {
	Currency    *CurrencyCodeEnum               `json:"currency,omitempty"`
	Operation   *string                         `json:"operation,omitempty"`
	ProductType *SavingsPlanProductTypeEnum     `json:"productType,omitempty"`
	Properties  *interface{}                    `json:"properties,omitempty"`
	Rate        *string                         `json:"rate,omitempty"`
	ServiceCode *SavingsPlanRateServiceCodeEnum `json:"serviceCode,omitempty"`
	Unit        *SavingsPlanRateUnitEnum        `json:"unit,omitempty"`
	UsageType   *string                         `json:"usageType,omitempty"`
}
