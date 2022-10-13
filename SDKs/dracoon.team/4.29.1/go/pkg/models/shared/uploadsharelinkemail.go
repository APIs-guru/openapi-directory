package shared

type UploadShareLinkEmail struct {
	Body             string   `json:"body"`
	ReceiverLanguage *string  `json:"receiverLanguage"`
	Recipients       []string `json:"recipients"`
}
