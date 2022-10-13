package shared

import (
	"time"
)

type PublicKeyContainer struct {
	CreatedAt *time.Time `json:"createdAt"`
	CreatedBy *int64     `json:"createdBy"`
	ExpireAt  *time.Time `json:"expireAt"`
	PublicKey string     `json:"publicKey"`
	Version   string     `json:"version"`
}
