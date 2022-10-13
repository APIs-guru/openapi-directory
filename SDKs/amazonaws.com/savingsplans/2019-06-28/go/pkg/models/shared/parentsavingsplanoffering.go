package shared

type ParentSavingsPlanOffering struct {
	Currency        *CurrencyCodeEnum             `json:"currency"`
	DurationSeconds *int64                        `json:"durationSeconds"`
	OfferingID      *string                       `json:"offeringId"`
	PaymentOption   *SavingsPlanPaymentOptionEnum `json:"paymentOption"`
	PlanDescription *string                       `json:"planDescription"`
	PlanType        *SavingsPlanTypeEnum          `json:"planType"`
}
