package operations

type GetUsers200ApplicationJSONMobileApplicationDetailsOsEnum string

const (
	GetUsers200ApplicationJSONMobileApplicationDetailsOsEnumAndroid GetUsers200ApplicationJSONMobileApplicationDetailsOsEnum = "Android"
	GetUsers200ApplicationJSONMobileApplicationDetailsOsEnumIos     GetUsers200ApplicationJSONMobileApplicationDetailsOsEnum = "IOS"
	GetUsers200ApplicationJSONMobileApplicationDetailsOsEnumOther   GetUsers200ApplicationJSONMobileApplicationDetailsOsEnum = "OTHER"
)

type GetUsers200ApplicationJSONMobileApplicationDetailsDeviceNameEnum string

const (
	GetUsers200ApplicationJSONMobileApplicationDetailsDeviceNameEnumIPhone  GetUsers200ApplicationJSONMobileApplicationDetailsDeviceNameEnum = "iPhone"
	GetUsers200ApplicationJSONMobileApplicationDetailsDeviceNameEnumAndroid GetUsers200ApplicationJSONMobileApplicationDetailsDeviceNameEnum = "Android"
	GetUsers200ApplicationJSONMobileApplicationDetailsDeviceNameEnumOther   GetUsers200ApplicationJSONMobileApplicationDetailsDeviceNameEnum = "Other"
)

type GetUsers200ApplicationJSONMobileApplicationDetailsStatusEnum string

const (
	GetUsers200ApplicationJSONMobileApplicationDetailsStatusEnumLive    GetUsers200ApplicationJSONMobileApplicationDetailsStatusEnum = "LIVE"
	GetUsers200ApplicationJSONMobileApplicationDetailsStatusEnumClosed  GetUsers200ApplicationJSONMobileApplicationDetailsStatusEnum = "CLOSED"
	GetUsers200ApplicationJSONMobileApplicationDetailsStatusEnumLocked  GetUsers200ApplicationJSONMobileApplicationDetailsStatusEnum = "LOCKED"
	GetUsers200ApplicationJSONMobileApplicationDetailsStatusEnumSmsSent GetUsers200ApplicationJSONMobileApplicationDetailsStatusEnum = "SMS_SENT"
)

type GetUsers200ApplicationJSONMobileApplicationDetailsMobileApplication struct {
	Os                  *GetUsers200ApplicationJSONMobileApplicationDetailsOsEnum         `json:"OS"`
	BusinessUserID      *int64                                                            `json:"businessUserId"`
	ClientID            *string                                                           `json:"clientID"`
	DeviceName          *GetUsers200ApplicationJSONMobileApplicationDetailsDeviceNameEnum `json:"deviceName"`
	DeviceOsVersion     *string                                                           `json:"deviceOSVersion"`
	MobileApplicationID *int64                                                            `json:"mobileApplicationId"`
	Status              *GetUsers200ApplicationJSONMobileApplicationDetailsStatusEnum     `json:"status"`
}

type GetUsers200ApplicationJSONRoleEnum string

const (
	GetUsers200ApplicationJSONRoleEnumAdmin    GetUsers200ApplicationJSONRoleEnum = "ADMIN"
	GetUsers200ApplicationJSONRoleEnumFullUser GetUsers200ApplicationJSONRoleEnum = "FULL_USER"
	GetUsers200ApplicationJSONRoleEnumReadOnly GetUsers200ApplicationJSONRoleEnum = "READ_ONLY"
	GetUsers200ApplicationJSONRoleEnumCardOnly GetUsers200ApplicationJSONRoleEnum = "CARD_ONLY"
)

type GetUsers200ApplicationJSONStatusEnum string

const (
	GetUsers200ApplicationJSONStatusEnumLive        GetUsers200ApplicationJSONStatusEnum = "LIVE"
	GetUsers200ApplicationJSONStatusEnumClosed      GetUsers200ApplicationJSONStatusEnum = "CLOSED"
	GetUsers200ApplicationJSONStatusEnumFrozen      GetUsers200ApplicationJSONStatusEnum = "FROZEN"
	GetUsers200ApplicationJSONStatusEnumInviteSent  GetUsers200ApplicationJSONStatusEnum = "INVITE_SENT"
	GetUsers200ApplicationJSONStatusEnumSmsCodeSent GetUsers200ApplicationJSONStatusEnum = "SMS_CODE_SENT"
)

type GetUsers200ApplicationJSONUser struct {
	EmailAddress             *string                                                              `json:"emailAddress"`
	FirstName                *string                                                              `json:"firstName"`
	ID                       *int64                                                               `json:"id"`
	LastName                 *string                                                              `json:"lastName"`
	Lastlogin                *string                                                              `json:"lastlogin"`
	MobileApplicationDetails *GetUsers200ApplicationJSONMobileApplicationDetailsMobileApplication `json:"mobileApplicationDetails"`
	MobileNumber             *string                                                              `json:"mobileNumber"`
	Role                     *GetUsers200ApplicationJSONRoleEnum                                  `json:"role"`
	Status                   *GetUsers200ApplicationJSONStatusEnum                                `json:"status"`
	UserCvl                  *string                                                              `json:"userCvl"`
}

type GetUsersResponse struct {
	ContentType string
	StatusCode  int64
	Users       []GetUsers200ApplicationJSONUser
}
