package shared

import (
	"time"
)

// PublicKeyEntity
// List Public Keys
type PublicKeyEntity struct {
	CreatedAt   *time.Time `json:"created_at,omitempty"`
	Fingerprint *string    `json:"fingerprint,omitempty"`
	ID          *int32     `json:"id,omitempty"`
	Title       *string    `json:"title,omitempty"`
}
