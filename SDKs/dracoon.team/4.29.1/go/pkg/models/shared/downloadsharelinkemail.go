package shared

// DownloadShareLinkEmail
// Request model for sending an email of a Download Share link
type DownloadShareLinkEmail struct {
	Body             string   `json:"body"`
	ReceiverLanguage *string  `json:"receiverLanguage,omitempty"`
	Recipients       []string `json:"recipients"`
}
