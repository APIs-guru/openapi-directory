package shared

import (
	"time"
)

type PublicKeyEntity struct {
	CreatedAt   *time.Time `json:"created_at"`
	Fingerprint *string    `json:"fingerprint"`
	ID          *int32     `json:"id"`
	Title       *string    `json:"title"`
}
