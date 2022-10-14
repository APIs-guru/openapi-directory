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
	Os                  *GetUsers200ApplicationJSONMobileApplicationDetailsOsEnum         `json:"OS,omitempty"`
	BusinessUserID      *int64                                                            `json:"businessUserId,omitempty"`
	ClientID            *string                                                           `json:"clientID,omitempty"`
	DeviceName          *GetUsers200ApplicationJSONMobileApplicationDetailsDeviceNameEnum `json:"deviceName,omitempty"`
	DeviceOsVersion     *string                                                           `json:"deviceOSVersion,omitempty"`
	MobileApplicationID *int64                                                            `json:"mobileApplicationId,omitempty"`
	Status              *GetUsers200ApplicationJSONMobileApplicationDetailsStatusEnum     `json:"status,omitempty"`
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
	EmailAddress             *string                                                              `json:"emailAddress,omitempty"`
	FirstName                *string                                                              `json:"firstName,omitempty"`
	ID                       *int64                                                               `json:"id,omitempty"`
	LastName                 *string                                                              `json:"lastName,omitempty"`
	Lastlogin                *string                                                              `json:"lastlogin,omitempty"`
	MobileApplicationDetails *GetUsers200ApplicationJSONMobileApplicationDetailsMobileApplication `json:"mobileApplicationDetails,omitempty"`
	MobileNumber             *string                                                              `json:"mobileNumber,omitempty"`
	Role                     *GetUsers200ApplicationJSONRoleEnum                                  `json:"role,omitempty"`
	Status                   *GetUsers200ApplicationJSONStatusEnum                                `json:"status,omitempty"`
	UserCvl                  *string                                                              `json:"userCvl,omitempty"`
}

type GetUsersResponse struct {
	ContentType string
	StatusCode  int64
	Users       []GetUsers200ApplicationJSONUser
}
