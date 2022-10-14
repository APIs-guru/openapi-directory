package shared

import (
	"time"
)

type ObjectExpiration struct {
	EnableExpiration bool       `json:"enableExpiration"`
	ExpireAt         *time.Time `json:"expireAt,omitempty"`
}
