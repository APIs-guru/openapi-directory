package shared

// TemplateCreateMessageBody
// Provides information about a request to create a message template.
type TemplateCreateMessageBody struct {
	Arn       *string `json:"Arn,omitempty"`
	Message   *string `json:"Message,omitempty"`
	RequestID *string `json:"RequestID,omitempty"`
}
