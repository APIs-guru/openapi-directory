package shared



type CampaignEmailMessage struct {
    Body *string `json:"Body,omitempty"`
    FromAddress *string `json:"FromAddress,omitempty"`
    HTMLBody *string `json:"HtmlBody,omitempty"`
    Title *string `json:"Title,omitempty"`
    
}

