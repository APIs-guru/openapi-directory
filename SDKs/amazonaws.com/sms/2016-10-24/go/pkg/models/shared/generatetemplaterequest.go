package shared

type GenerateTemplateRequest struct {
	AppID          *string           `json:"appId"`
	TemplateFormat *OutputFormatEnum `json:"templateFormat"`
}
