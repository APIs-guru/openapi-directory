package shared

// MessageBody
// Provides information about an API request or response.
type MessageBody struct {
	Message   *string `json:"Message,omitempty"`
	RequestID *string `json:"RequestID,omitempty"`
}
