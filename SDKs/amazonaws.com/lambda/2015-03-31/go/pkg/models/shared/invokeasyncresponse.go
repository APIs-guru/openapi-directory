package shared

// InvokeAsyncResponse
// A success response (<code>202 Accepted</code>) indicates that the request is queued for invocation.
type InvokeAsyncResponse struct {
	Status *int64 `json:"Status,omitempty"`
}
