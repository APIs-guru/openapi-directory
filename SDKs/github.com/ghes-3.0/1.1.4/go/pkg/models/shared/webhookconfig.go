package shared

type WebhookConfig struct {
	ContentType *string      `json:"content_type"`
	InsecureSsl *interface{} `json:"insecure_ssl"`
	Secret      *string      `json:"secret"`
	URL         *string      `json:"url"`
}
