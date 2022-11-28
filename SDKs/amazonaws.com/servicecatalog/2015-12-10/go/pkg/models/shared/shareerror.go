package shared

// ShareError
// Errors that occurred during the portfolio share operation.
type ShareError struct {
	Accounts []string `json:"Accounts,omitempty"`
	Error    *string  `json:"Error,omitempty"`
	Message  *string  `json:"Message,omitempty"`
}
