package shared

import (
	"time"
)

type PrivateKeyContainer struct {
	CreatedAt  *time.Time `json:"createdAt,omitempty"`
	CreatedBy  *int64     `json:"createdBy,omitempty"`
	ExpireAt   *time.Time `json:"expireAt,omitempty"`
	PrivateKey string     `json:"privateKey"`
	Version    string     `json:"version"`
}
