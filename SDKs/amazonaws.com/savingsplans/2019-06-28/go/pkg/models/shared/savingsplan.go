package shared

type SavingsPlan struct {
	Commitment             *string                       `json:"commitment"`
	Currency               *CurrencyCodeEnum             `json:"currency"`
	Description            *string                       `json:"description"`
	Ec2InstanceFamily      *string                       `json:"ec2InstanceFamily"`
	End                    *string                       `json:"end"`
	OfferingID             *string                       `json:"offeringId"`
	PaymentOption          *SavingsPlanPaymentOptionEnum `json:"paymentOption"`
	ProductTypes           []SavingsPlanProductTypeEnum  `json:"productTypes"`
	RecurringPaymentAmount *string                       `json:"recurringPaymentAmount"`
	Region                 *string                       `json:"region"`
	SavingsPlanArn         *string                       `json:"savingsPlanArn"`
	SavingsPlanID          *string                       `json:"savingsPlanId"`
	SavingsPlanType        *SavingsPlanTypeEnum          `json:"savingsPlanType"`
	Start                  *string                       `json:"start"`
	State                  *SavingsPlanStateEnum         `json:"state"`
	Tags                   map[string]string             `json:"tags"`
	TermDurationInSeconds  *int64                        `json:"termDurationInSeconds"`
	UpfrontPaymentAmount   *string                       `json:"upfrontPaymentAmount"`
}
