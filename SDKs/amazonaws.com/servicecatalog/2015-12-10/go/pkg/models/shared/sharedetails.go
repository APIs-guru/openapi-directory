package shared

type ShareDetails struct {
	ShareErrors      []ShareError `json:"ShareErrors"`
	SuccessfulShares []string     `json:"SuccessfulShares"`
}
