package shared

type PushNotificationTemplateResponse struct {
	Adm                  *AndroidPushNotificationTemplate `json:"ADM"`
	Apns                 *ApnsPushNotificationTemplate    `json:"APNS"`
	Arn                  *string                          `json:"Arn"`
	Baidu                *AndroidPushNotificationTemplate `json:"Baidu"`
	CreationDate         string                           `json:"CreationDate"`
	Default              *DefaultPushNotificationTemplate `json:"Default"`
	DefaultSubstitutions *string                          `json:"DefaultSubstitutions"`
	Gcm                  *AndroidPushNotificationTemplate `json:"GCM"`
	LastModifiedDate     string                           `json:"LastModifiedDate"`
	RecommenderID        *string                          `json:"RecommenderId"`
	TemplateDescription  *string                          `json:"TemplateDescription"`
	TemplateName         string                           `json:"TemplateName"`
	TemplateType         TemplateTypeEnum                 `json:"TemplateType"`
	Version              *string                          `json:"Version"`
	Tags                 map[string]string                `json:"tags"`
}
