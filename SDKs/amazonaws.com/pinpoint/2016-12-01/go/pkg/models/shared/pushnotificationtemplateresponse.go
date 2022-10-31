package shared

type PushNotificationTemplateResponse struct {
	Adm                  *AndroidPushNotificationTemplate `json:"ADM,omitempty"`
	Apns                 *ApnsPushNotificationTemplate    `json:"APNS,omitempty"`
	Arn                  *string                          `json:"Arn,omitempty"`
	Baidu                *AndroidPushNotificationTemplate `json:"Baidu,omitempty"`
	CreationDate         string                           `json:"CreationDate"`
	Default              *DefaultPushNotificationTemplate `json:"Default,omitempty"`
	DefaultSubstitutions *string                          `json:"DefaultSubstitutions,omitempty"`
	Gcm                  *AndroidPushNotificationTemplate `json:"GCM,omitempty"`
	LastModifiedDate     string                           `json:"LastModifiedDate"`
	RecommenderID        *string                          `json:"RecommenderId,omitempty"`
	TemplateDescription  *string                          `json:"TemplateDescription,omitempty"`
	TemplateName         string                           `json:"TemplateName"`
	TemplateType         TemplateTypeEnum                 `json:"TemplateType"`
	Version              *string                          `json:"Version,omitempty"`
	Tags                 map[string]string                `json:"tags,omitempty"`
}
