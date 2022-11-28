package shared

// CampaignEmailMessage
// Specifies the content and "From" address for an email message that's sent to recipients of a campaign.
type CampaignEmailMessage struct {
	Body        *string `json:"Body,omitempty"`
	FromAddress *string `json:"FromAddress,omitempty"`
	HTMLBody    *string `json:"HtmlBody,omitempty"`
	Title       *string `json:"Title,omitempty"`
}
