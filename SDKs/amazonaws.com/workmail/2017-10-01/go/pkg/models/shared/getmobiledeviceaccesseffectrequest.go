package shared

type GetMobileDeviceAccessEffectRequest struct {
	DeviceModel           *string `json:"DeviceModel"`
	DeviceOperatingSystem *string `json:"DeviceOperatingSystem"`
	DeviceType            *string `json:"DeviceType"`
	DeviceUserAgent       *string `json:"DeviceUserAgent"`
	OrganizationID        string  `json:"OrganizationId"`
}
