package shared

import (
	"time"
)

// User
// The representation of an Amazon WorkMail user.
type User struct {
	DisabledDate *time.Time       `json:"DisabledDate,omitempty"`
	DisplayName  *string          `json:"DisplayName,omitempty"`
	Email        *string          `json:"Email,omitempty"`
	EnabledDate  *time.Time       `json:"EnabledDate,omitempty"`
	ID           *string          `json:"Id,omitempty"`
	Name         *string          `json:"Name,omitempty"`
	State        *EntityStateEnum `json:"State,omitempty"`
	UserRole     *UserRoleEnum    `json:"UserRole,omitempty"`
}
