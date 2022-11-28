package shared

import (
	"time"
)

// UserDataOutput
// User information
type UserDataOutput struct {
	AuthData            UserAuthData              `json:"authData"`
	AuthMethods         []UserAuthMethod          `json:"authMethods,omitempty"`
	AvatarUUID          string                    `json:"avatarUuid"`
	Email               *string                   `json:"email,omitempty"`
	ExpireAt            *time.Time                `json:"expireAt,omitempty"`
	FirstName           string                    `json:"firstName"`
	Gender              *string                   `json:"gender,omitempty"`
	HasManageableRooms  *bool                     `json:"hasManageableRooms,omitempty"`
	HomeRoomID          *int64                    `json:"homeRoomId,omitempty"`
	ID                  int64                     `json:"id"`
	IsEncryptionEnabled *bool                     `json:"isEncryptionEnabled,omitempty"`
	IsLocked            bool                      `json:"isLocked"`
	LastLoginSuccessAt  *time.Time                `json:"lastLoginSuccessAt,omitempty"`
	LastName            string                    `json:"lastName"`
	LockStatus          int32                     `json:"lockStatus"`
	Login               *string                   `json:"login,omitempty"`
	Phone               *string                   `json:"phone,omitempty"`
	PublicKeyContainer  *PublicKeyContainerOutput `json:"publicKeyContainer,omitempty"`
	Title               *string                   `json:"title,omitempty"`
	UserAttributes      *UserAttributes           `json:"userAttributes,omitempty"`
	UserName            string                    `json:"userName"`
	UserRoles           *RoleList                 `json:"userRoles,omitempty"`
}
