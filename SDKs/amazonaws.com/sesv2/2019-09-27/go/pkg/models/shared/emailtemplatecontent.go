package shared

type EmailTemplateContent struct {
	HTML    *string `json:"Html"`
	Subject *string `json:"Subject"`
	Text    *string `json:"Text"`
}
