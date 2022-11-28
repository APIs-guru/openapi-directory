package shared

// ShareDetails
// Information about the portfolio share operation.
type ShareDetails struct {
	ShareErrors      []ShareError `json:"ShareErrors,omitempty"`
	SuccessfulShares []string     `json:"SuccessfulShares,omitempty"`
}
