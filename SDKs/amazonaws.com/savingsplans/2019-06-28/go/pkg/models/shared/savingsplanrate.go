package shared

type SavingsPlanRate struct {
	Currency    *CurrencyCodeEnum               `json:"currency"`
	Operation   *string                         `json:"operation"`
	ProductType *SavingsPlanProductTypeEnum     `json:"productType"`
	Properties  *interface{}                    `json:"properties"`
	Rate        *string                         `json:"rate"`
	ServiceCode *SavingsPlanRateServiceCodeEnum `json:"serviceCode"`
	Unit        *SavingsPlanRateUnitEnum        `json:"unit"`
	UsageType   *string                         `json:"usageType"`
}
