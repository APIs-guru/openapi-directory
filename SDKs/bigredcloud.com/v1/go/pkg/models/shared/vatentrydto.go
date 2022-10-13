package shared

type VatEntryDto struct {
	Amount     *float64 `json:"amount"`
	ID         *int64   `json:"id"`
	Percentage *float64 `json:"percentage"`
	VatRateID  *int64   `json:"vatRateId"`
}
