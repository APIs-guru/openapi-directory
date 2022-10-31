package shared



type EmailMessage struct {
    Body *string `json:"Body,omitempty"`
    FeedbackForwardingAddress *string `json:"FeedbackForwardingAddress,omitempty"`
    FromAddress *string `json:"FromAddress,omitempty"`
    RawEmail *RawEmail `json:"RawEmail,omitempty"`
    ReplyToAddresses []string `json:"ReplyToAddresses,omitempty"`
    SimpleEmail *SimpleEmail `json:"SimpleEmail,omitempty"`
    Substitutions map[string][]string `json:"Substitutions,omitempty"`
    
}

