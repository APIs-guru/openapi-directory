package shared



type TotalByOffice struct {
    ElectionYear *int32 `json:"election_year,omitempty"`
    Office *string `json:"office,omitempty"`
    TotalDisbursements *float64 `json:"total_disbursements,omitempty"`
    TotalReceipts *float64 `json:"total_receipts,omitempty"`
    
}

