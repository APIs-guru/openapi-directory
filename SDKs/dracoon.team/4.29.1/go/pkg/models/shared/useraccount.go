package shared

import (
	"time"
)

type UserAccount struct {
	AuthData              UserAuthData     `json:"authData"`
	AuthMethods           []UserAuthMethod `json:"authMethods"`
	Customer              CustomerData     `json:"customer"`
	Email                 *string          `json:"email"`
	ExpireAt              *time.Time       `json:"expireAt"`
	FirstName             string           `json:"firstName"`
	Gender                *string          `json:"gender"`
	HasManageableRooms    bool             `json:"hasManageableRooms"`
	HomeRoomID            *int64           `json:"homeRoomId"`
	ID                    int64            `json:"id"`
	IsEncryptionEnabled   *bool            `json:"isEncryptionEnabled"`
	IsLocked              bool             `json:"isLocked"`
	Language              string           `json:"language"`
	LastLoginFailAt       *time.Time       `json:"lastLoginFailAt"`
	LastLoginFailIP       *string          `json:"lastLoginFailIp"`
	LastLoginSuccessAt    *time.Time       `json:"lastLoginSuccessAt"`
	LastLoginSuccessIP    *string          `json:"lastLoginSuccessIp"`
	LastName              string           `json:"lastName"`
	LockStatus            int32            `json:"lockStatus"`
	Login                 *string          `json:"login"`
	MustSetEmail          *bool            `json:"mustSetEmail"`
	NeedsToAcceptEula     *bool            `json:"needsToAcceptEULA"`
	NeedsToChangePassword bool             `json:"needsToChangePassword"`
	NeedsToChangeUserName *bool            `json:"needsToChangeUserName"`
	Phone                 *string          `json:"phone"`
	Title                 *string          `json:"title"`
	UserAttributes        *UserAttributes  `json:"userAttributes"`
	UserGroups            []UserGroup      `json:"userGroups"`
	UserName              string           `json:"userName"`
	UserRoles             RoleList         `json:"userRoles"`
}
