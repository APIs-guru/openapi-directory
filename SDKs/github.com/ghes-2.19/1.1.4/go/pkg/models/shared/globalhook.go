package shared

type GlobalHookConfig struct {
	ContentType *string `json:"content_type"`
	InsecureSsl *string `json:"insecure_ssl"`
	Secret      *string `json:"secret"`
	URL         *string `json:"url"`
}

type GlobalHook struct {
	Active    *bool             `json:"active"`
	Config    *GlobalHookConfig `json:"config"`
	CreatedAt *string           `json:"created_at"`
	Events    []string          `json:"events"`
	ID        *int64            `json:"id"`
	Name      *string           `json:"name"`
	PingURL   *string           `json:"ping_url"`
	Type      *string           `json:"type"`
	UpdatedAt *string           `json:"updated_at"`
	URL       *string           `json:"url"`
}
