package shared

type PaymentGatewayDetailsAPIModel struct {
	Name                *string            `json:"Name,omitempty"`
	SupportedCurrencies []CurrencyAPIModel `json:"SupportedCurrencies,omitempty"`
}
