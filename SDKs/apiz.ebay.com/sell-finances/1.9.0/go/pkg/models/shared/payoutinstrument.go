package shared

type PayoutInstrument struct {
	AccountLastFourDigits *string `json:"accountLastFourDigits"`
	InstrumentType        *string `json:"instrumentType"`
	Nickname              *string `json:"nickname"`
}
