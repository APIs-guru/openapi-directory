package shared

type GetMobileDeviceAccessEffectRequest struct {
	DeviceModel           *string `json:"DeviceModel,omitempty"`
	DeviceOperatingSystem *string `json:"DeviceOperatingSystem,omitempty"`
	DeviceType            *string `json:"DeviceType,omitempty"`
	DeviceUserAgent       *string `json:"DeviceUserAgent,omitempty"`
	OrganizationID        string  `json:"OrganizationId"`
}
