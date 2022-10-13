package shared

type SetPaymentPolicyResponse struct {
	CategoryTypes       []CategoryType  `json:"categoryTypes"`
	Deposit             *Deposit        `json:"deposit"`
	Description         *string         `json:"description"`
	FullPaymentDueIn    *TimeDuration   `json:"fullPaymentDueIn"`
	ImmediatePay        *bool           `json:"immediatePay"`
	MarketplaceID       *string         `json:"marketplaceId"`
	Name                *string         `json:"name"`
	PaymentInstructions *string         `json:"paymentInstructions"`
	PaymentMethods      []PaymentMethod `json:"paymentMethods"`
	PaymentPolicyID     *string         `json:"paymentPolicyId"`
	Warnings            []Error         `json:"warnings"`
}
