package shared

type SmsTemplateResponse struct {
	Arn                  *string           `json:"Arn"`
	Body                 *string           `json:"Body"`
	CreationDate         string            `json:"CreationDate"`
	DefaultSubstitutions *string           `json:"DefaultSubstitutions"`
	LastModifiedDate     string            `json:"LastModifiedDate"`
	RecommenderID        *string           `json:"RecommenderId"`
	TemplateDescription  *string           `json:"TemplateDescription"`
	TemplateName         string            `json:"TemplateName"`
	TemplateType         TemplateTypeEnum  `json:"TemplateType"`
	Version              *string           `json:"Version"`
	Tags                 map[string]string `json:"tags"`
}
