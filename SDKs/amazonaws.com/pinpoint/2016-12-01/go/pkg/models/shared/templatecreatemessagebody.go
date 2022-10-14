package shared

type TemplateCreateMessageBody struct {
	Arn       *string `json:"Arn,omitempty"`
	Message   *string `json:"Message,omitempty"`
	RequestID *string `json:"RequestID,omitempty"`
}
