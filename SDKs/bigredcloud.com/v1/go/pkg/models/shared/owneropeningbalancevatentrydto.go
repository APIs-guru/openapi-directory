package shared

type OwnerOpeningBalanceVatEntryDto struct {
	Amount    *float64 `json:"amount"`
	VatRateID *int64   `json:"vatRateId"`
}
