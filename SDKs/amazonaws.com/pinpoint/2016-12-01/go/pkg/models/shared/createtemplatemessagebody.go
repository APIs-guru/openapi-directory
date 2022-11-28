package shared

// CreateTemplateMessageBody
// Provides information about a request to create a message template.
type CreateTemplateMessageBody struct {
	Arn       *string `json:"Arn,omitempty"`
	Message   *string `json:"Message,omitempty"`
	RequestID *string `json:"RequestID,omitempty"`
}
