package shared

type CurrencyDetailsAPIModel struct {
	Code   *string `json:"Code"`
	ID     *int32  `json:"Id"`
	Name   *string `json:"Name"`
	Symbol *string `json:"Symbol"`
	Value  *string `json:"Value"`
}
