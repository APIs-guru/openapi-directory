package shared

import (
	"time"
)

// PublicKeyContainer
// Public key container
type PublicKeyContainer struct {
	CreatedAt *time.Time `json:"createdAt,omitempty"`
	CreatedBy *int64     `json:"createdBy,omitempty"`
	ExpireAt  *time.Time `json:"expireAt,omitempty"`
	PublicKey string     `json:"publicKey"`
	Version   string     `json:"version"`
}

// PublicKeyContainerOutput
// Public key container
type PublicKeyContainerOutput struct {
	CreatedAt *time.Time `json:"createdAt,omitempty"`
	CreatedBy *int64     `json:"createdBy,omitempty"`
	PublicKey string     `json:"publicKey"`
	Version   string     `json:"version"`
}
