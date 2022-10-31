package shared

import (
	"time"
)

type UserItem struct {
	AvatarUUID          string          `json:"avatarUuid"`
	CreatedAt           *time.Time      `json:"createdAt,omitempty"`
	Email               *string         `json:"email,omitempty"`
	ExpireAt            *time.Time      `json:"expireAt,omitempty"`
	FirstName           string          `json:"firstName"`
	Gender              *string         `json:"gender,omitempty"`
	HasManageableRooms  *bool           `json:"hasManageableRooms,omitempty"`
	HomeRoomID          *int64          `json:"homeRoomId,omitempty"`
	ID                  int64           `json:"id"`
	IsEncryptionEnabled *bool           `json:"isEncryptionEnabled,omitempty"`
	IsLocked            bool            `json:"isLocked"`
	LastLoginSuccessAt  *time.Time      `json:"lastLoginSuccessAt,omitempty"`
	LastName            string          `json:"lastName"`
	LockStatus          int32           `json:"lockStatus"`
	Login               string          `json:"login"`
	Phone               *string         `json:"phone,omitempty"`
	Title               *string         `json:"title,omitempty"`
	UserAttributes      *UserAttributes `json:"userAttributes,omitempty"`
	UserName            string          `json:"userName"`
	UserRoles           *RoleList       `json:"userRoles,omitempty"`
}
