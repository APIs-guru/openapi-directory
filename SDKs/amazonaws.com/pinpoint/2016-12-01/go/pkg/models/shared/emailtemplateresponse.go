package shared

type EmailTemplateResponse struct {
	Arn                  *string           `json:"Arn"`
	CreationDate         string            `json:"CreationDate"`
	DefaultSubstitutions *string           `json:"DefaultSubstitutions"`
	HTMLPart             *string           `json:"HtmlPart"`
	LastModifiedDate     string            `json:"LastModifiedDate"`
	RecommenderID        *string           `json:"RecommenderId"`
	Subject              *string           `json:"Subject"`
	TemplateDescription  *string           `json:"TemplateDescription"`
	TemplateName         string            `json:"TemplateName"`
	TemplateType         TemplateTypeEnum  `json:"TemplateType"`
	TextPart             *string           `json:"TextPart"`
	Version              *string           `json:"Version"`
	Tags                 map[string]string `json:"tags"`
}
