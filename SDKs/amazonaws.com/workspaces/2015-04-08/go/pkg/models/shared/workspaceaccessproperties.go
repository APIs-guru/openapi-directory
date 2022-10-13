package shared

type WorkspaceAccessProperties struct {
	DeviceTypeAndroid    *AccessPropertyValueEnum `json:"DeviceTypeAndroid"`
	DeviceTypeChromeOs   *AccessPropertyValueEnum `json:"DeviceTypeChromeOs"`
	DeviceTypeIos        *AccessPropertyValueEnum `json:"DeviceTypeIos"`
	DeviceTypeLinux      *AccessPropertyValueEnum `json:"DeviceTypeLinux"`
	DeviceTypeOsx        *AccessPropertyValueEnum `json:"DeviceTypeOsx"`
	DeviceTypeWeb        *AccessPropertyValueEnum `json:"DeviceTypeWeb"`
	DeviceTypeWindows    *AccessPropertyValueEnum `json:"DeviceTypeWindows"`
	DeviceTypeZeroClient *AccessPropertyValueEnum `json:"DeviceTypeZeroClient"`
}
