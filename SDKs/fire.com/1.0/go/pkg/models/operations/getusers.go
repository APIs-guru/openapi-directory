package operations




type GetUsersUserMobileApplicationOsEnum string

const (
    GetUsersUserMobileApplicationOsEnumAndroid GetUsersUserMobileApplicationOsEnum = "Android"
GetUsersUserMobileApplicationOsEnumIos GetUsersUserMobileApplicationOsEnum = "IOS"
GetUsersUserMobileApplicationOsEnumOther GetUsersUserMobileApplicationOsEnum = "OTHER"
)



type GetUsersUserMobileApplicationDeviceNameEnum string

const (
    GetUsersUserMobileApplicationDeviceNameEnumIPhone GetUsersUserMobileApplicationDeviceNameEnum = "iPhone"
GetUsersUserMobileApplicationDeviceNameEnumAndroid GetUsersUserMobileApplicationDeviceNameEnum = "Android"
GetUsersUserMobileApplicationDeviceNameEnumOther GetUsersUserMobileApplicationDeviceNameEnum = "Other"
)



type GetUsersUserMobileApplicationStatusEnum string

const (
    GetUsersUserMobileApplicationStatusEnumLive GetUsersUserMobileApplicationStatusEnum = "LIVE"
GetUsersUserMobileApplicationStatusEnumClosed GetUsersUserMobileApplicationStatusEnum = "CLOSED"
GetUsersUserMobileApplicationStatusEnumLocked GetUsersUserMobileApplicationStatusEnum = "LOCKED"
GetUsersUserMobileApplicationStatusEnumSmsSent GetUsersUserMobileApplicationStatusEnum = "SMS_SENT"
)


type GetUsersUserMobileApplication struct {
    Os *GetUsersUserMobileApplicationOsEnum `json:"OS,omitempty"`
    BusinessUserID *int64 `json:"businessUserId,omitempty"`
    ClientID *string `json:"clientID,omitempty"`
    DeviceName *GetUsersUserMobileApplicationDeviceNameEnum `json:"deviceName,omitempty"`
    DeviceOsVersion *string `json:"deviceOSVersion,omitempty"`
    MobileApplicationID *int64 `json:"mobileApplicationId,omitempty"`
    Status *GetUsersUserMobileApplicationStatusEnum `json:"status,omitempty"`
    
}


type GetUsersUserRoleEnum string

const (
    GetUsersUserRoleEnumAdmin GetUsersUserRoleEnum = "ADMIN"
GetUsersUserRoleEnumFullUser GetUsersUserRoleEnum = "FULL_USER"
GetUsersUserRoleEnumReadOnly GetUsersUserRoleEnum = "READ_ONLY"
GetUsersUserRoleEnumCardOnly GetUsersUserRoleEnum = "CARD_ONLY"
)



type GetUsersUserStatusEnum string

const (
    GetUsersUserStatusEnumLive GetUsersUserStatusEnum = "LIVE"
GetUsersUserStatusEnumClosed GetUsersUserStatusEnum = "CLOSED"
GetUsersUserStatusEnumFrozen GetUsersUserStatusEnum = "FROZEN"
GetUsersUserStatusEnumInviteSent GetUsersUserStatusEnum = "INVITE_SENT"
GetUsersUserStatusEnumSmsCodeSent GetUsersUserStatusEnum = "SMS_CODE_SENT"
)


type GetUsersUser struct {
    EmailAddress *string `json:"emailAddress,omitempty"`
    FirstName *string `json:"firstName,omitempty"`
    ID *int64 `json:"id,omitempty"`
    LastName *string `json:"lastName,omitempty"`
    Lastlogin *string `json:"lastlogin,omitempty"`
    MobileApplicationDetails *GetUsersUserMobileApplication `json:"mobileApplicationDetails,omitempty"`
    MobileNumber *string `json:"mobileNumber,omitempty"`
    Role *GetUsersUserRoleEnum `json:"role,omitempty"`
    Status *GetUsersUserStatusEnum `json:"status,omitempty"`
    UserCvl *string `json:"userCvl,omitempty"`
    
}

type GetUsersResponse struct {
    ContentType string 
    StatusCode int64 
    Users []GetUsersUser 
    
}

