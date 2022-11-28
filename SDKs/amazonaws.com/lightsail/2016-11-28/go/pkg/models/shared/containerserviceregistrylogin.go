package shared

import (
	"time"
)

// ContainerServiceRegistryLogin
// Describes the login information for the container image registry of an Amazon Lightsail account.
type ContainerServiceRegistryLogin struct {
	ExpiresAt *time.Time `json:"expiresAt,omitempty"`
	Password  *string    `json:"password,omitempty"`
	Registry  *string    `json:"registry,omitempty"`
	Username  *string    `json:"username,omitempty"`
}
