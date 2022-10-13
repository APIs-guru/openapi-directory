package shared

import (
	"time"
)

type HookConfig struct {
	ContentType *string `json:"content_type"`
	Digest      *string `json:"digest"`
	Email       *string `json:"email"`
	InsecureSsl *string `json:"insecure_ssl"`
	Password    *string `json:"password"`
	Room        *string `json:"room"`
	Secret      *string `json:"secret"`
	Subdomain   *string `json:"subdomain"`
	Token       *string `json:"token"`
	URL         *string `json:"url"`
}

type Hook struct {
	Active       bool         `json:"active"`
	Config       HookConfig   `json:"config"`
	CreatedAt    time.Time    `json:"created_at"`
	Events       []string     `json:"events"`
	ID           int64        `json:"id"`
	LastResponse HookResponse `json:"last_response"`
	Name         string       `json:"name"`
	PingURL      string       `json:"ping_url"`
	TestURL      string       `json:"test_url"`
	Type         string       `json:"type"`
	UpdatedAt    time.Time    `json:"updated_at"`
	URL          string       `json:"url"`
}
