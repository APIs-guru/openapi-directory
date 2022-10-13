package shared

import (
	"time"
)

type PrivateKeyContainer struct {
	CreatedAt  *time.Time `json:"createdAt"`
	CreatedBy  *int64     `json:"createdBy"`
	ExpireAt   *time.Time `json:"expireAt"`
	PrivateKey string     `json:"privateKey"`
	Version    string     `json:"version"`
}
