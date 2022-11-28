package shared

// CustomerListDpcsResponse
// Response message of customer's listing DPCs.
type CustomerListDpcsResponse struct {
	Dpcs []Dpc `json:"dpcs,omitempty"`
}
