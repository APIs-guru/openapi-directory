package shared

type MessageBody struct {
	Message   *string `json:"Message,omitempty"`
	RequestID *string `json:"RequestID,omitempty"`
}
