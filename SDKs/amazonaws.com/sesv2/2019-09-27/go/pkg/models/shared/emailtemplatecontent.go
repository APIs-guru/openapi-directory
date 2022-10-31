package shared



type EmailTemplateContent struct {
    HTML *string `json:"Html,omitempty"`
    Subject *string `json:"Subject,omitempty"`
    Text *string `json:"Text,omitempty"`
    
}

