package shared

type VoiceTemplateResponse struct {
	Arn                  *string           `json:"Arn"`
	Body                 *string           `json:"Body"`
	CreationDate         string            `json:"CreationDate"`
	DefaultSubstitutions *string           `json:"DefaultSubstitutions"`
	LanguageCode         *string           `json:"LanguageCode"`
	LastModifiedDate     string            `json:"LastModifiedDate"`
	TemplateDescription  *string           `json:"TemplateDescription"`
	TemplateName         string            `json:"TemplateName"`
	TemplateType         TemplateTypeEnum  `json:"TemplateType"`
	Version              *string           `json:"Version"`
	VoiceID              *string           `json:"VoiceId"`
	Tags                 map[string]string `json:"tags"`
}
