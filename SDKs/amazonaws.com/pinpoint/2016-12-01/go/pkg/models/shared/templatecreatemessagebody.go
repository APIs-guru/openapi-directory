package shared

type TemplateCreateMessageBody struct {
	Arn       *string `json:"Arn"`
	Message   *string `json:"Message"`
	RequestID *string `json:"RequestID"`
}
