package shared

type PaymentPolicyRequest struct {
	CategoryTypes       []CategoryType  `json:"categoryTypes"`
	Deposit             *Deposit        `json:"deposit"`
	Description         *string         `json:"description"`
	FullPaymentDueIn    *TimeDuration   `json:"fullPaymentDueIn"`
	ImmediatePay        *bool           `json:"immediatePay"`
	MarketplaceID       *string         `json:"marketplaceId"`
	Name                *string         `json:"name"`
	PaymentInstructions *string         `json:"paymentInstructions"`
	PaymentMethods      []PaymentMethod `json:"paymentMethods"`
}
