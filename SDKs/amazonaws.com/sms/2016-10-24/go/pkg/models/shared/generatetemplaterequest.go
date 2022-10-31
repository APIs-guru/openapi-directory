package shared

type GenerateTemplateRequest struct {
	AppID          *string           `json:"appId,omitempty"`
	TemplateFormat *OutputFormatEnum `json:"templateFormat,omitempty"`
}
