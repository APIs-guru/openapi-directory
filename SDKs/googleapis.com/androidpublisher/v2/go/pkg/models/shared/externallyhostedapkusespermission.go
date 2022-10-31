package shared

type ExternallyHostedApkUsesPermission struct {
	MaxSdkVersion *int32  `json:"maxSdkVersion,omitempty"`
	Name          *string `json:"name,omitempty"`
}
