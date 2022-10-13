package shared

type CampaignEmailMessage struct {
	Body        *string `json:"Body"`
	FromAddress *string `json:"FromAddress"`
	HTMLBody    *string `json:"HtmlBody"`
	Title       *string `json:"Title"`
}
