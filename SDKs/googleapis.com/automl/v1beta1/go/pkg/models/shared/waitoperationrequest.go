package shared

// WaitOperationRequest
// The request message for Operations.WaitOperation.
type WaitOperationRequest struct {
	Timeout *string `json:"timeout,omitempty"`
}
