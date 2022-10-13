package shared

type TemplateResponse struct {
	Arn                  *string           `json:"Arn"`
	CreationDate         string            `json:"CreationDate"`
	DefaultSubstitutions *string           `json:"DefaultSubstitutions"`
	LastModifiedDate     string            `json:"LastModifiedDate"`
	TemplateDescription  *string           `json:"TemplateDescription"`
	TemplateName         string            `json:"TemplateName"`
	TemplateType         TemplateTypeEnum  `json:"TemplateType"`
	Version              *string           `json:"Version"`
	Tags                 map[string]string `json:"tags"`
}
