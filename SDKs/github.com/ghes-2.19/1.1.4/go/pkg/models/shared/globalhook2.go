package shared

type GlobalHook2Config struct {
	ContentType *string `json:"content_type,omitempty"`
	InsecureSsl *string `json:"insecure_ssl,omitempty"`
	URL         *string `json:"url,omitempty"`
}

type GlobalHook2 struct {
	Active    *bool              `json:"active,omitempty"`
	Config    *GlobalHook2Config `json:"config,omitempty"`
	CreatedAt *string            `json:"created_at,omitempty"`
	Events    []string           `json:"events,omitempty"`
	ID        *int64             `json:"id,omitempty"`
	Name      *string            `json:"name,omitempty"`
	PingURL   *string            `json:"ping_url,omitempty"`
	Type      *string            `json:"type,omitempty"`
	UpdatedAt *string            `json:"updated_at,omitempty"`
	URL       *string            `json:"url,omitempty"`
}
