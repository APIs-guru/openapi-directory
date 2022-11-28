package shared

// ParentSavingsPlanOffering
// Information about a Savings Plan offering.
type ParentSavingsPlanOffering struct {
	Currency        *CurrencyCodeEnum             `json:"currency,omitempty"`
	DurationSeconds *int64                        `json:"durationSeconds,omitempty"`
	OfferingID      *string                       `json:"offeringId,omitempty"`
	PaymentOption   *SavingsPlanPaymentOptionEnum `json:"paymentOption,omitempty"`
	PlanDescription *string                       `json:"planDescription,omitempty"`
	PlanType        *SavingsPlanTypeEnum          `json:"planType,omitempty"`
}
