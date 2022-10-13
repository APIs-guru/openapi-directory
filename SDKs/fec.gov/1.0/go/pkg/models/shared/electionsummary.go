package shared

type ElectionSummary struct {
	Count                   *int32   `json:"count"`
	Disbursements           *float64 `json:"disbursements"`
	IndependentExpenditures *float64 `json:"independent_expenditures"`
	Receipts                *float64 `json:"receipts"`
}
