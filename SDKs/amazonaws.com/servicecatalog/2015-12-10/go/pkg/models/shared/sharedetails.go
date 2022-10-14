package shared

type ShareDetails struct {
	ShareErrors      []ShareError `json:"ShareErrors,omitempty"`
	SuccessfulShares []string     `json:"SuccessfulShares,omitempty"`
}
