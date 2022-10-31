package shared

import (
	"time"
)

type DescribeUserResponse struct {
	DisabledDate *time.Time       `json:"DisabledDate,omitempty"`
	DisplayName  *string          `json:"DisplayName,omitempty"`
	Email        *string          `json:"Email,omitempty"`
	EnabledDate  *time.Time       `json:"EnabledDate,omitempty"`
	Name         *string          `json:"Name,omitempty"`
	State        *EntityStateEnum `json:"State,omitempty"`
	UserID       *string          `json:"UserId,omitempty"`
	UserRole     *UserRoleEnum    `json:"UserRole,omitempty"`
}
