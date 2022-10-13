package shared

type SoftwareInfo struct {
	AndroidBuildNumber             *string           `json:"androidBuildNumber"`
	AndroidBuildTime               *string           `json:"androidBuildTime"`
	AndroidDevicePolicyVersionCode *int32            `json:"androidDevicePolicyVersionCode"`
	AndroidDevicePolicyVersionName *string           `json:"androidDevicePolicyVersionName"`
	AndroidVersion                 *string           `json:"androidVersion"`
	BootloaderVersion              *string           `json:"bootloaderVersion"`
	DeviceBuildSignature           *string           `json:"deviceBuildSignature"`
	DeviceKernelVersion            *string           `json:"deviceKernelVersion"`
	PrimaryLanguageCode            *string           `json:"primaryLanguageCode"`
	SecurityPatchLevel             *string           `json:"securityPatchLevel"`
	SystemUpdateInfo               *SystemUpdateInfo `json:"systemUpdateInfo"`
}
