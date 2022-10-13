package shared

import (
	"time"
)

type SessionContextAttributes struct {
	CreationDate     *time.Time `json:"creationDate"`
	MfaAuthenticated *bool      `json:"mfaAuthenticated"`
}
