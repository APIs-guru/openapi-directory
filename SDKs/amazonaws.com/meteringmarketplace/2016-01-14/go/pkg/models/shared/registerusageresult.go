package shared

import (
	"time"
)

type RegisterUsageResult struct {
	PublicKeyRotationTimestamp *time.Time `json:"PublicKeyRotationTimestamp"`
	Signature                  *string    `json:"Signature"`
}
