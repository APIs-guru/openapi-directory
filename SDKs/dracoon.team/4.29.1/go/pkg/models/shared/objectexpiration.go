package shared

import (
	"time"
)

// ObjectExpiration
// Expiration information
type ObjectExpiration struct {
	EnableExpiration bool       `json:"enableExpiration"`
	ExpireAt         *time.Time `json:"expireAt,omitempty"`
}
