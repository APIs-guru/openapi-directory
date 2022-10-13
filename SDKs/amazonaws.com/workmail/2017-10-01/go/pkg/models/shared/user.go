package shared

import (
	"time"
)

type User struct {
	DisabledDate *time.Time       `json:"DisabledDate"`
	DisplayName  *string          `json:"DisplayName"`
	Email        *string          `json:"Email"`
	EnabledDate  *time.Time       `json:"EnabledDate"`
	ID           *string          `json:"Id"`
	Name         *string          `json:"Name"`
	State        *EntityStateEnum `json:"State"`
	UserRole     *UserRoleEnum    `json:"UserRole"`
}
