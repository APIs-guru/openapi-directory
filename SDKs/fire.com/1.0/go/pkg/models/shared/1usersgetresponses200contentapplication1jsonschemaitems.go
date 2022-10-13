package shared

type OneusersGetResponses200ContentApplication1jsonSchemaItemsMobileApplicationDetailsOsEnum string

const (
	OneusersGetResponses200ContentApplication1jsonSchemaItemsMobileApplicationDetailsOsEnumAndroid OneusersGetResponses200ContentApplication1jsonSchemaItemsMobileApplicationDetailsOsEnum = "Android"
	OneusersGetResponses200ContentApplication1jsonSchemaItemsMobileApplicationDetailsOsEnumIos     OneusersGetResponses200ContentApplication1jsonSchemaItemsMobileApplicationDetailsOsEnum = "IOS"
	OneusersGetResponses200ContentApplication1jsonSchemaItemsMobileApplicationDetailsOsEnumOther   OneusersGetResponses200ContentApplication1jsonSchemaItemsMobileApplicationDetailsOsEnum = "OTHER"
)

type OneusersGetResponses200ContentApplication1jsonSchemaItemsMobileApplicationDetailsDeviceNameEnum string

const (
	OneusersGetResponses200ContentApplication1jsonSchemaItemsMobileApplicationDetailsDeviceNameEnumIPhone  OneusersGetResponses200ContentApplication1jsonSchemaItemsMobileApplicationDetailsDeviceNameEnum = "iPhone"
	OneusersGetResponses200ContentApplication1jsonSchemaItemsMobileApplicationDetailsDeviceNameEnumAndroid OneusersGetResponses200ContentApplication1jsonSchemaItemsMobileApplicationDetailsDeviceNameEnum = "Android"
	OneusersGetResponses200ContentApplication1jsonSchemaItemsMobileApplicationDetailsDeviceNameEnumOther   OneusersGetResponses200ContentApplication1jsonSchemaItemsMobileApplicationDetailsDeviceNameEnum = "Other"
)

type OneusersGetResponses200ContentApplication1jsonSchemaItemsMobileApplicationDetailsStatusEnum string

const (
	OneusersGetResponses200ContentApplication1jsonSchemaItemsMobileApplicationDetailsStatusEnumLive    OneusersGetResponses200ContentApplication1jsonSchemaItemsMobileApplicationDetailsStatusEnum = "LIVE"
	OneusersGetResponses200ContentApplication1jsonSchemaItemsMobileApplicationDetailsStatusEnumClosed  OneusersGetResponses200ContentApplication1jsonSchemaItemsMobileApplicationDetailsStatusEnum = "CLOSED"
	OneusersGetResponses200ContentApplication1jsonSchemaItemsMobileApplicationDetailsStatusEnumLocked  OneusersGetResponses200ContentApplication1jsonSchemaItemsMobileApplicationDetailsStatusEnum = "LOCKED"
	OneusersGetResponses200ContentApplication1jsonSchemaItemsMobileApplicationDetailsStatusEnumSmsSent OneusersGetResponses200ContentApplication1jsonSchemaItemsMobileApplicationDetailsStatusEnum = "SMS_SENT"
)

type OneusersGetResponses200ContentApplication1jsonSchemaItemsMobileApplicationDetailsMobileApplication struct {
	Os                  *OneusersGetResponses200ContentApplication1jsonSchemaItemsMobileApplicationDetailsOsEnum         `json:"OS"`
	BusinessUserID      *int64                                                                                           `json:"businessUserId"`
	ClientID            *string                                                                                          `json:"clientID"`
	DeviceName          *OneusersGetResponses200ContentApplication1jsonSchemaItemsMobileApplicationDetailsDeviceNameEnum `json:"deviceName"`
	DeviceOsVersion     *string                                                                                          `json:"deviceOSVersion"`
	MobileApplicationID *int64                                                                                           `json:"mobileApplicationId"`
	Status              *OneusersGetResponses200ContentApplication1jsonSchemaItemsMobileApplicationDetailsStatusEnum     `json:"status"`
}

type OneusersGetResponses200ContentApplication1jsonSchemaItemsRoleEnum string

const (
	OneusersGetResponses200ContentApplication1jsonSchemaItemsRoleEnumAdmin    OneusersGetResponses200ContentApplication1jsonSchemaItemsRoleEnum = "ADMIN"
	OneusersGetResponses200ContentApplication1jsonSchemaItemsRoleEnumFullUser OneusersGetResponses200ContentApplication1jsonSchemaItemsRoleEnum = "FULL_USER"
	OneusersGetResponses200ContentApplication1jsonSchemaItemsRoleEnumReadOnly OneusersGetResponses200ContentApplication1jsonSchemaItemsRoleEnum = "READ_ONLY"
	OneusersGetResponses200ContentApplication1jsonSchemaItemsRoleEnumCardOnly OneusersGetResponses200ContentApplication1jsonSchemaItemsRoleEnum = "CARD_ONLY"
)

type OneusersGetResponses200ContentApplication1jsonSchemaItemsStatusEnum string

const (
	OneusersGetResponses200ContentApplication1jsonSchemaItemsStatusEnumLive        OneusersGetResponses200ContentApplication1jsonSchemaItemsStatusEnum = "LIVE"
	OneusersGetResponses200ContentApplication1jsonSchemaItemsStatusEnumClosed      OneusersGetResponses200ContentApplication1jsonSchemaItemsStatusEnum = "CLOSED"
	OneusersGetResponses200ContentApplication1jsonSchemaItemsStatusEnumFrozen      OneusersGetResponses200ContentApplication1jsonSchemaItemsStatusEnum = "FROZEN"
	OneusersGetResponses200ContentApplication1jsonSchemaItemsStatusEnumInviteSent  OneusersGetResponses200ContentApplication1jsonSchemaItemsStatusEnum = "INVITE_SENT"
	OneusersGetResponses200ContentApplication1jsonSchemaItemsStatusEnumSmsCodeSent OneusersGetResponses200ContentApplication1jsonSchemaItemsStatusEnum = "SMS_CODE_SENT"
)

type OneusersGetResponses200ContentApplication1jsonSchemaItems struct {
	EmailAddress             *string                                                                                             `json:"emailAddress"`
	FirstName                *string                                                                                             `json:"firstName"`
	ID                       *int64                                                                                              `json:"id"`
	LastName                 *string                                                                                             `json:"lastName"`
	Lastlogin                *string                                                                                             `json:"lastlogin"`
	MobileApplicationDetails *OneusersGetResponses200ContentApplication1jsonSchemaItemsMobileApplicationDetailsMobileApplication `json:"mobileApplicationDetails"`
	MobileNumber             *string                                                                                             `json:"mobileNumber"`
	Role                     *OneusersGetResponses200ContentApplication1jsonSchemaItemsRoleEnum                                  `json:"role"`
	Status                   *OneusersGetResponses200ContentApplication1jsonSchemaItemsStatusEnum                                `json:"status"`
	UserCvl                  *string                                                                                             `json:"userCvl"`
}
