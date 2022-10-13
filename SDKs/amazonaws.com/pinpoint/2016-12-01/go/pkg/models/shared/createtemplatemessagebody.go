package shared

type CreateTemplateMessageBody struct {
	Arn       *string `json:"Arn"`
	Message   *string `json:"Message"`
	RequestID *string `json:"RequestID"`
}
