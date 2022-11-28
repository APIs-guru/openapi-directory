package shared

// FundingSource
// This type provided details on the funding source for the transfer.
type FundingSource struct {
	Brand *string `json:"brand,omitempty"`
	Memo  *string `json:"memo,omitempty"`
	Type  *string `json:"type,omitempty"`
}
