package shared

// WorkspaceAccessProperties
// The device types and operating systems that can be used to access a WorkSpace. For more information, see <a href="https://docs.aws.amazon.com/workspaces/latest/adminguide/workspaces-network-requirements.html">Amazon WorkSpaces Client Network Requirements</a>.
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
