package shared

type PaymentGatewayDetailsAPIModel struct {
	Name                *string            `json:"Name"`
	SupportedCurrencies []CurrencyAPIModel `json:"SupportedCurrencies"`
}
