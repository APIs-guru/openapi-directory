package shared



type TotalByOfficeByParty struct {
    ElectionYear *int32 `json:"election_year,omitempty"`
    Office *string `json:"office,omitempty"`
    Party *string `json:"party,omitempty"`
    TotalDisbursements *float64 `json:"total_disbursements,omitempty"`
    TotalReceipts *float64 `json:"total_receipts,omitempty"`
    
}

