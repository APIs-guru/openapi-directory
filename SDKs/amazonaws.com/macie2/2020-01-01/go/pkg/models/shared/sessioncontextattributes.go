package shared

import (
	"time"
)

// SessionContextAttributes
// Provides information about the context in which temporary security credentials were issued to an entity.
type SessionContextAttributes struct {
	CreationDate     *time.Time `json:"creationDate,omitempty"`
	MfaAuthenticated *bool      `json:"mfaAuthenticated,omitempty"`
}
