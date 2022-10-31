package shared



type DownloadShareLinkEmail struct {
    Body string `json:"body"`
    ReceiverLanguage *string `json:"receiverLanguage,omitempty"`
    Recipients []string `json:"recipients"`
    
}

