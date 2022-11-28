package shared

// SavingsPlan
// Information about a Savings Plan.
type SavingsPlan struct {
	Commitment             *string                       `json:"commitment,omitempty"`
	Currency               *CurrencyCodeEnum             `json:"currency,omitempty"`
	Description            *string                       `json:"description,omitempty"`
	Ec2InstanceFamily      *string                       `json:"ec2InstanceFamily,omitempty"`
	End                    *string                       `json:"end,omitempty"`
	OfferingID             *string                       `json:"offeringId,omitempty"`
	PaymentOption          *SavingsPlanPaymentOptionEnum `json:"paymentOption,omitempty"`
	ProductTypes           []SavingsPlanProductTypeEnum  `json:"productTypes,omitempty"`
	RecurringPaymentAmount *string                       `json:"recurringPaymentAmount,omitempty"`
	Region                 *string                       `json:"region,omitempty"`
	SavingsPlanArn         *string                       `json:"savingsPlanArn,omitempty"`
	SavingsPlanID          *string                       `json:"savingsPlanId,omitempty"`
	SavingsPlanType        *SavingsPlanTypeEnum          `json:"savingsPlanType,omitempty"`
	Start                  *string                       `json:"start,omitempty"`
	State                  *SavingsPlanStateEnum         `json:"state,omitempty"`
	Tags                   map[string]string             `json:"tags,omitempty"`
	TermDurationInSeconds  *int64                        `json:"termDurationInSeconds,omitempty"`
	UpfrontPaymentAmount   *string                       `json:"upfrontPaymentAmount,omitempty"`
}
