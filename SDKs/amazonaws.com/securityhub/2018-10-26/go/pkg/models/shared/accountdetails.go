package shared

// AccountDetails
// The details of an Amazon Web Services account.
type AccountDetails struct {
	AccountID string  `json:"AccountId"`
	Email     *string `json:"Email,omitempty"`
}
