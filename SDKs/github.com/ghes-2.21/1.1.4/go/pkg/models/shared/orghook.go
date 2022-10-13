package shared

import (
	"time"
)

type OrgHookConfig struct {
	ContentType *string `json:"content_type"`
	InsecureSsl *string `json:"insecure_ssl"`
	Secret      *string `json:"secret"`
	URL         *string `json:"url"`
}

type OrgHook struct {
	Active    bool          `json:"active"`
	Config    OrgHookConfig `json:"config"`
	CreatedAt time.Time     `json:"created_at"`
	Events    []string      `json:"events"`
	ID        int64         `json:"id"`
	Name      string        `json:"name"`
	PingURL   string        `json:"ping_url"`
	Type      string        `json:"type"`
	UpdatedAt time.Time     `json:"updated_at"`
	URL       string        `json:"url"`
}
