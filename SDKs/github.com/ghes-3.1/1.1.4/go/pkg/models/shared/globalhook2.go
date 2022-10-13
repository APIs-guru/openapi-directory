package shared

type GlobalHook2Config struct {
	ContentType *string `json:"content_type"`
	InsecureSsl *string `json:"insecure_ssl"`
	URL         *string `json:"url"`
}

type GlobalHook2 struct {
	Active    *bool              `json:"active"`
	Config    *GlobalHook2Config `json:"config"`
	CreatedAt *string            `json:"created_at"`
	Events    []string           `json:"events"`
	ID        *int64             `json:"id"`
	Name      *string            `json:"name"`
	PingURL   *string            `json:"ping_url"`
	Type      *string            `json:"type"`
	UpdatedAt *string            `json:"updated_at"`
	URL       *string            `json:"url"`
}
