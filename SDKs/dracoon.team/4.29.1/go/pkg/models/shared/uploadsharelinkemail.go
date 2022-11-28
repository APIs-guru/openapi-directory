package shared

// UploadShareLinkEmail
// Request model for sending an email of an Upload Share link
type UploadShareLinkEmail struct {
	Body             string   `json:"body"`
	ReceiverLanguage *string  `json:"receiverLanguage,omitempty"`
	Recipients       []string `json:"recipients"`
}
