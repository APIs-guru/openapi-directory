package shared

import (
	"time"
)

// Group
// The representation of an Amazon WorkMail group.
type Group struct {
	DisabledDate *time.Time       `json:"DisabledDate,omitempty"`
	Email        *string          `json:"Email,omitempty"`
	EnabledDate  *time.Time       `json:"EnabledDate,omitempty"`
	ID           *string          `json:"Id,omitempty"`
	Name         *string          `json:"Name,omitempty"`
	State        *EntityStateEnum `json:"State,omitempty"`
}
