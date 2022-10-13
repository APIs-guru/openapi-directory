package shared

type TotalByOfficeByParty struct {
	ElectionYear       *int32   `json:"election_year"`
	Office             *string  `json:"office"`
	Party              *string  `json:"party"`
	TotalDisbursements *float64 `json:"total_disbursements"`
	TotalReceipts      *float64 `json:"total_receipts"`
}
