package shared

type TemplateVersionResponse struct {
	CreationDate         string  `json:"CreationDate"`
	DefaultSubstitutions *string `json:"DefaultSubstitutions"`
	LastModifiedDate     string  `json:"LastModifiedDate"`
	TemplateDescription  *string `json:"TemplateDescription"`
	TemplateName         string  `json:"TemplateName"`
	TemplateType         string  `json:"TemplateType"`
	Version              *string `json:"Version"`
}
