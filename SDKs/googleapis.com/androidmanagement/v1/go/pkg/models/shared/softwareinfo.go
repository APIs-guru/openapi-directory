package shared

// SoftwareInfo
// Information about device software.
type SoftwareInfo struct {
	AndroidBuildNumber             *string           `json:"androidBuildNumber,omitempty"`
	AndroidBuildTime               *string           `json:"androidBuildTime,omitempty"`
	AndroidDevicePolicyVersionCode *int32            `json:"androidDevicePolicyVersionCode,omitempty"`
	AndroidDevicePolicyVersionName *string           `json:"androidDevicePolicyVersionName,omitempty"`
	AndroidVersion                 *string           `json:"androidVersion,omitempty"`
	BootloaderVersion              *string           `json:"bootloaderVersion,omitempty"`
	DeviceBuildSignature           *string           `json:"deviceBuildSignature,omitempty"`
	DeviceKernelVersion            *string           `json:"deviceKernelVersion,omitempty"`
	PrimaryLanguageCode            *string           `json:"primaryLanguageCode,omitempty"`
	SecurityPatchLevel             *string           `json:"securityPatchLevel,omitempty"`
	SystemUpdateInfo               *SystemUpdateInfo `json:"systemUpdateInfo,omitempty"`
}
