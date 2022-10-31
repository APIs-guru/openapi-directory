package shared




type UserInfoUserTypeEnum string

const (
    UserInfoUserTypeEnumSystem UserInfoUserTypeEnum = "system"
UserInfoUserTypeEnumInternal UserInfoUserTypeEnum = "internal"
UserInfoUserTypeEnumExternal UserInfoUserTypeEnum = "external"
UserInfoUserTypeEnumDeleted UserInfoUserTypeEnum = "deleted"
)


type UserInfo struct {
    AvatarUUID string `json:"avatarUuid"`
    DisplayName *string `json:"displayName,omitempty"`
    Email *string `json:"email,omitempty"`
    FirstName string `json:"firstName"`
    ID int64 `json:"id"`
    LastName string `json:"lastName"`
    Title *string `json:"title,omitempty"`
    UserName string `json:"userName"`
    UserType UserInfoUserTypeEnum `json:"userType"`
    
}

