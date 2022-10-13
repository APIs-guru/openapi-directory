package shared

import (
	"time"
)

type UserData struct {
	AuthData            UserAuthData        `json:"authData"`
	AuthMethods         []UserAuthMethod    `json:"authMethods"`
	AvatarUUID          string              `json:"avatarUuid"`
	Email               *string             `json:"email"`
	ExpireAt            *time.Time          `json:"expireAt"`
	FirstName           string              `json:"firstName"`
	Gender              *string             `json:"gender"`
	HasManageableRooms  *bool               `json:"hasManageableRooms"`
	HomeRoomID          *int64              `json:"homeRoomId"`
	ID                  int64               `json:"id"`
	IsEncryptionEnabled *bool               `json:"isEncryptionEnabled"`
	IsLocked            bool                `json:"isLocked"`
	LastLoginSuccessAt  *time.Time          `json:"lastLoginSuccessAt"`
	LastName            string              `json:"lastName"`
	LockStatus          int32               `json:"lockStatus"`
	Login               *string             `json:"login"`
	Phone               *string             `json:"phone"`
	PublicKeyContainer  *PublicKeyContainer `json:"publicKeyContainer"`
	Title               *string             `json:"title"`
	UserAttributes      *UserAttributes     `json:"userAttributes"`
	UserName            string              `json:"userName"`
	UserRoles           *RoleList           `json:"userRoles"`
}
