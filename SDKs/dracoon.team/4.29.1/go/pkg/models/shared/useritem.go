package shared

import (
	"time"
)

type UserItem struct {
	AvatarUUID          string          `json:"avatarUuid"`
	CreatedAt           *time.Time      `json:"createdAt"`
	Email               *string         `json:"email"`
	ExpireAt            *time.Time      `json:"expireAt"`
	FirstName           string          `json:"firstName"`
	Gender              *string         `json:"gender"`
	HasManageableRooms  *bool           `json:"hasManageableRooms"`
	HomeRoomID          *int64          `json:"homeRoomId"`
	ID                  int64           `json:"id"`
	IsEncryptionEnabled *bool           `json:"isEncryptionEnabled"`
	IsLocked            bool            `json:"isLocked"`
	LastLoginSuccessAt  *time.Time      `json:"lastLoginSuccessAt"`
	LastName            string          `json:"lastName"`
	LockStatus          int32           `json:"lockStatus"`
	Login               string          `json:"login"`
	Phone               *string         `json:"phone"`
	Title               *string         `json:"title"`
	UserAttributes      *UserAttributes `json:"userAttributes"`
	UserName            string          `json:"userName"`
	UserRoles           *RoleList       `json:"userRoles"`
}
