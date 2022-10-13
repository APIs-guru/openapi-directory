package shared

import (
	"time"
)

type DescribeUserResponse struct {
	DisabledDate *time.Time       `json:"DisabledDate"`
	DisplayName  *string          `json:"DisplayName"`
	Email        *string          `json:"Email"`
	EnabledDate  *time.Time       `json:"EnabledDate"`
	Name         *string          `json:"Name"`
	State        *EntityStateEnum `json:"State"`
	UserID       *string          `json:"UserId"`
	UserRole     *UserRoleEnum    `json:"UserRole"`
}
