package shared

// InvokeAsyncResponse
// Upon success, it returns empty response. Otherwise, throws an exception.
type InvokeAsyncResponse struct {
	Status *int64 `json:"Status,omitempty"`
}
