package shared

import (
	"time"
)

type UploadToken struct {
	CreatedAt *time.Time `json:"createdAt"`
	ExpiresAt *time.Time `json:"expiresAt"`
	Token     *string    `json:"token"`
	TTL       *int64     `json:"ttl"`
}
