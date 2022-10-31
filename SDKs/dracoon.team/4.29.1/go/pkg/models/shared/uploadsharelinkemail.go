package shared



type UploadShareLinkEmail struct {
    Body string `json:"body"`
    ReceiverLanguage *string `json:"receiverLanguage,omitempty"`
    Recipients []string `json:"recipients"`
    
}

