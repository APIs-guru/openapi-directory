package shared

type VatEntryDto struct {
	Amount     *float64 `json:"amount,omitempty"`
	ID         *int64   `json:"id,omitempty"`
	Percentage *float64 `json:"percentage,omitempty"`
	VatRateID  *int64   `json:"vatRateId,omitempty"`
}
