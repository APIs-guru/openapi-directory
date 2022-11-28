package shared

// Result
// Details about the account that was not processed.
type Result struct {
	AccountID        *string `json:"AccountId,omitempty"`
	ProcessingResult *string `json:"ProcessingResult,omitempty"`
}
