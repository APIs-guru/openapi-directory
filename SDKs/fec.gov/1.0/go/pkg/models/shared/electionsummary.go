package shared

type ElectionSummary struct {
	Count                   *int32   `json:"count,omitempty"`
	Disbursements           *float64 `json:"disbursements,omitempty"`
	IndependentExpenditures *float64 `json:"independent_expenditures,omitempty"`
	Receipts                *float64 `json:"receipts,omitempty"`
}
