package shared

import (
	"time"
)

type ContainerServiceRegistryLogin struct {
	ExpiresAt *time.Time `json:"expiresAt"`
	Password  *string    `json:"password"`
	Registry  *string    `json:"registry"`
	Username  *string    `json:"username"`
}
