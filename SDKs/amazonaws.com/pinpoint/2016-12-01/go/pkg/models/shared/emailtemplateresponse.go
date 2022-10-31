package shared

type EmailTemplateResponse struct {
	Arn                  *string           `json:"Arn,omitempty"`
	CreationDate         string            `json:"CreationDate"`
	DefaultSubstitutions *string           `json:"DefaultSubstitutions,omitempty"`
	HTMLPart             *string           `json:"HtmlPart,omitempty"`
	LastModifiedDate     string            `json:"LastModifiedDate"`
	RecommenderID        *string           `json:"RecommenderId,omitempty"`
	Subject              *string           `json:"Subject,omitempty"`
	TemplateDescription  *string           `json:"TemplateDescription,omitempty"`
	TemplateName         string            `json:"TemplateName"`
	TemplateType         TemplateTypeEnum  `json:"TemplateType"`
	TextPart             *string           `json:"TextPart,omitempty"`
	Version              *string           `json:"Version,omitempty"`
	Tags                 map[string]string `json:"tags,omitempty"`
}
