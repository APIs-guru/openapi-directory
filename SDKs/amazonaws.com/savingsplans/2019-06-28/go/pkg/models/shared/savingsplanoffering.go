package shared

type SavingsPlanOffering struct {
	Currency        *CurrencyCodeEnum             `json:"currency"`
	Description     *string                       `json:"description"`
	DurationSeconds *int64                        `json:"durationSeconds"`
	OfferingID      *string                       `json:"offeringId"`
	Operation       *string                       `json:"operation"`
	PaymentOption   *SavingsPlanPaymentOptionEnum `json:"paymentOption"`
	PlanType        *SavingsPlanTypeEnum          `json:"planType"`
	ProductTypes    []SavingsPlanProductTypeEnum  `json:"productTypes"`
	Properties      *interface{}                  `json:"properties"`
	ServiceCode     *string                       `json:"serviceCode"`
	UsageType       *string                       `json:"usageType"`
}
