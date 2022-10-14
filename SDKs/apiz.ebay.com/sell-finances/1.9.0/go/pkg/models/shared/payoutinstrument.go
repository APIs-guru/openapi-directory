package shared

type PayoutInstrument struct {
	AccountLastFourDigits *string `json:"accountLastFourDigits,omitempty"`
	InstrumentType        *string `json:"instrumentType,omitempty"`
	Nickname              *string `json:"nickname,omitempty"`
}
