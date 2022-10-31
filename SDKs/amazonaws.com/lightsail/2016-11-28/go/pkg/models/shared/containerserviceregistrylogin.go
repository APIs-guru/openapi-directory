package shared

import (
	"time"
)

type ContainerServiceRegistryLogin struct {
	ExpiresAt *time.Time `json:"expiresAt,omitempty"`
	Password  *string    `json:"password,omitempty"`
	Registry  *string    `json:"registry,omitempty"`
	Username  *string    `json:"username,omitempty"`
}
