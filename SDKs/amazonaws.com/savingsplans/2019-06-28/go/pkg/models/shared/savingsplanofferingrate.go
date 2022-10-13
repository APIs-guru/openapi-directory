package shared

type SavingsPlanOfferingRate struct {
	Operation           *string                         `json:"operation"`
	ProductType         *SavingsPlanProductTypeEnum     `json:"productType"`
	Properties          *interface{}                    `json:"properties"`
	Rate                *string                         `json:"rate"`
	SavingsPlanOffering *ParentSavingsPlanOffering      `json:"savingsPlanOffering"`
	ServiceCode         *SavingsPlanRateServiceCodeEnum `json:"serviceCode"`
	Unit                *SavingsPlanRateUnitEnum        `json:"unit"`
	UsageType           *string                         `json:"usageType"`
}
