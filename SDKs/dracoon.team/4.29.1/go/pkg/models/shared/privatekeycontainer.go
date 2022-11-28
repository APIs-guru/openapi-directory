package shared

import (
	"time"
)

// PrivateKeyContainer
// Private key container
type PrivateKeyContainer struct {
	CreatedAt  *time.Time `json:"createdAt,omitempty"`
	CreatedBy  *int64     `json:"createdBy,omitempty"`
	ExpireAt   *time.Time `json:"expireAt,omitempty"`
	PrivateKey string     `json:"privateKey"`
	Version    string     `json:"version"`
}

// PrivateKeyContainerOutput
// Private key container
type PrivateKeyContainerOutput struct {
	CreatedAt  *time.Time `json:"createdAt,omitempty"`
	CreatedBy  *int64     `json:"createdBy,omitempty"`
	PrivateKey string     `json:"privateKey"`
	Version    string     `json:"version"`
}
