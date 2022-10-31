package shared

import (
"time")

type UserAccount struct {
    AuthData UserAuthData `json:"authData"`
    AuthMethods []UserAuthMethod `json:"authMethods,omitempty"`
    Customer CustomerData `json:"customer"`
    Email *string `json:"email,omitempty"`
    ExpireAt *time.Time `json:"expireAt,omitempty"`
    FirstName string `json:"firstName"`
    Gender *string `json:"gender,omitempty"`
    HasManageableRooms bool `json:"hasManageableRooms"`
    HomeRoomID *int64 `json:"homeRoomId,omitempty"`
    ID int64 `json:"id"`
    IsEncryptionEnabled *bool `json:"isEncryptionEnabled,omitempty"`
    IsLocked bool `json:"isLocked"`
    Language string `json:"language"`
    LastLoginFailAt *time.Time `json:"lastLoginFailAt,omitempty"`
    LastLoginFailIP *string `json:"lastLoginFailIp,omitempty"`
    LastLoginSuccessAt *time.Time `json:"lastLoginSuccessAt,omitempty"`
    LastLoginSuccessIP *string `json:"lastLoginSuccessIp,omitempty"`
    LastName string `json:"lastName"`
    LockStatus int32 `json:"lockStatus"`
    Login *string `json:"login,omitempty"`
    MustSetEmail *bool `json:"mustSetEmail,omitempty"`
    NeedsToAcceptEula *bool `json:"needsToAcceptEULA,omitempty"`
    NeedsToChangePassword bool `json:"needsToChangePassword"`
    NeedsToChangeUserName *bool `json:"needsToChangeUserName,omitempty"`
    Phone *string `json:"phone,omitempty"`
    Title *string `json:"title,omitempty"`
    UserAttributes *UserAttributes `json:"userAttributes,omitempty"`
    UserGroups []UserGroup `json:"userGroups,omitempty"`
    UserName string `json:"userName"`
    UserRoles RoleList `json:"userRoles"`
    
}

