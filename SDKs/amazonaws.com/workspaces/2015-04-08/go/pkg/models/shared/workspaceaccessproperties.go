package shared

type WorkspaceAccessProperties struct {
	DeviceTypeAndroid    *AccessPropertyValueEnum `json:"DeviceTypeAndroid,omitempty"`
	DeviceTypeChromeOs   *AccessPropertyValueEnum `json:"DeviceTypeChromeOs,omitempty"`
	DeviceTypeIos        *AccessPropertyValueEnum `json:"DeviceTypeIos,omitempty"`
	DeviceTypeLinux      *AccessPropertyValueEnum `json:"DeviceTypeLinux,omitempty"`
	DeviceTypeOsx        *AccessPropertyValueEnum `json:"DeviceTypeOsx,omitempty"`
	DeviceTypeWeb        *AccessPropertyValueEnum `json:"DeviceTypeWeb,omitempty"`
	DeviceTypeWindows    *AccessPropertyValueEnum `json:"DeviceTypeWindows,omitempty"`
	DeviceTypeZeroClient *AccessPropertyValueEnum `json:"DeviceTypeZeroClient,omitempty"`
}
