package shared

type TotalByOffice struct {
	ElectionYear       *int32   `json:"election_year"`
	Office             *string  `json:"office"`
	TotalDisbursements *float64 `json:"total_disbursements"`
	TotalReceipts      *float64 `json:"total_receipts"`
}
